const getters = {
  language: state => state.app.language,
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  roles: state => state.user.roles,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  errorLogs: state => state.errorLog.logs,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}

export default getters
