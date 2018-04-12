const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  roles: state => state.user.roles,
  errorLogs: state => state.errorLog.logs,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
}

export default getters
