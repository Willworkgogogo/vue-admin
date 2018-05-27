import { constantRouterMap, asyncRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param {Array} roles, 用户身份权限组成的数组
 * @param route，当前页面的路由信息
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    // 该角色已有权限里有满足的就返回true
    return roles.some(role => route.meta.roles.indexOf(role) > -1)
  }
  return false
}

/**
 * 递归方式处理过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles ， 定义的权限
 */
function filterAsyncRouter(asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      // 父路由含有访问权限
      // 判断是否有子路由，且子路由个数必须大于0
      if (route.children && route.children.length) {
        // 递归
        // 过滤出满足角色要求的路由赋值给route.children
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  // 将符合角色权限的路由数组对象返回
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    s: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve, reject) => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          // admin 用户不需要过滤路由
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
