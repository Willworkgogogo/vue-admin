import { loginByUsername, getUserInfo, logout } from '@/api/login'
import { getToken, setToken, removeToken } from 'utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_NAME(state, name) {
      state.name = name
    },
    SET_AVATAR(state, avatar) {
      state.avatar = avatar
    },
    SET_INTRODUCTION(state, introduction) {
      state.introduction = introduction
    },
    SET_ROLES(state, roles) {
      state.roles = roles
    }
  },
  actions: {
    // 用户名登入
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password)
          .then(res => {
            const data = res.data
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            resolve()
          })
          .catch(error => reject(error))
      })
    },

    // GetUserInfo 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token)
          .then(res => {
            // mockjs cant custom code status, so hack it
            if (!res.data) {
              reject(new Error('getUserInfo Failed!'))
            }
            const data = res.data
            commit('SET_ROLES', data.roles)
            commit('SET_NAME', data.name)
            commit('SET_AVATAR', data.avatar)
            commit('SET_INTRODUCTION', data.introduction)
            resolve(res)
          })
          .catch(err => reject(err))
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
          })
          .catch(err => reject(err))
      })
    },

    // 前台登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
