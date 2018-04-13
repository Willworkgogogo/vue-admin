import Cookies from 'js-cookie'
import * as CONFIG from '@/api/config'

const app = {
  state: {
    language: Cookies.get('language') || 'en',
    sidebar: {
      opened: !+Cookies.get('sidebarStatus') // 第一进入时为cookie中不存在sidebarStatus字段，此时应当取反，让sidebar显示
    }
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened
        ? Cookies.set('sidebarStatus', CONFIG.SIDEBAR_OPEN)
        : Cookies.set('sidebarStatus', CONFIG.SIDEBAR_CLOSE)
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
