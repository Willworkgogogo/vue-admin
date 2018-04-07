import {loginByUsername} from '@/api/login'
import {getToken, setToken, removeToken} from 'utils/auth'

const user = {
  state: {
    user: '',
    token: getToken(),
    name: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_NAME(state, name) {
      state.name = name
    }
  },
  actions: {
    LoginByUsername({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        
      })
    }
  }
}