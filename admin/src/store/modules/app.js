import Cookies from 'js-cookie'
import * as CONFIG from '@/api/config'

const app = {
  state: {
    language: Cookies.get('language') || 'en',
    sidebar: {
      opened: Boolean(+Cookies.get('sidebarStatus'))
    }
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened
        ? Cookies.set('sidebarStatus', CONFIG.SIDEBAR_CLOSE)
        : Cookies.set('sidebarStatus', CONFIG.SIDEBAR_OPEN)
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
