const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  errorLogs: state => state.errorLog.logs
}

export default getters
