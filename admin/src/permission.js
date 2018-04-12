import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import permission from './store/modules/permission'

NProgress.configure({ showSpinner: false })

/**
 * hasPermission 权限判断
 * @param {Array} roles 用户拥有的身份数组
 * @param {string} permissionRoles 准许访问的用户身份数组
 */

function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // 最高权限用户
  if (!permission) return true // 不传或[]，表示所有人可访问页面
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

// 白名单路由
const whiteList = ['/login', '/authredirect']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    // 已登录
    if (to.path === '/login') {
      // 都登陆还想去登录界面，做梦，不给去。你只能去退出
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        // 再拉取一遍用户信息
        store
          .dispatch('GetUserInfo')
          .then(res => {
            /**
             * 这里默认每个用户最少都有一个角色
             */
            const roles = res.data.roles
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              router.addRoutes(store.getters.addRouters) // 调用vue-router方法动态添加符合权限要求的路由
              next({ ...to, replace: true }) // TODO hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          })
          .catch(() => {
            store.dispatch('FedLogOut').catch(res => {
              Message.error('权限认证失败，请重新登录')
              next({ path: '/login' })
            })
          })
      } else {
        // 花裤衩只在这里判断了是否有权限，
        // 但是这里并没有添加动态路由，如果用户满足条件，但是此时vm实例上并没有这个路由啊? 理解一下。 TODO
        // hkc: 没有动态改变权限的需求可直接next() 删除下方权限判断
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } })
        }
      }
    }
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) >= 0) {
      next()
    } else {
      next('/login') // 最终重定向位置
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
