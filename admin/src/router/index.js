import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: _import('login/index'),
    hidden: true
  },
  { path: '/404', component: _import('errorPages/404'), hidden: true },
  { path: '/401', component: _import('errorPages/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: false }
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'index',
        component: _import('permission/index'),
        name: 'permission',
        meta: {
          title: 'permission',
          icon: 'lock',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/example',
    name: 'example',
    component: Layout,
    redirect: '/example/table/drag-table',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: '/example/table',
        redirect: '/example/table/drag-table',
        component: _import('example/table/index'),
        name: 'Table',
        meta: {title: 'Table', icon: 'table'},
        children: [
          { path: 'drag-table', component: _import('example/table/dragTable'), name: 'dragTable', meta: {title: 'dragTable'} }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
