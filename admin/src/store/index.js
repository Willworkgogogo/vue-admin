import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import errorLog from './modules/errorLog'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    errorLog,
    permission
  },
  getters
})

export default store
