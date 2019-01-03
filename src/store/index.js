import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false,
      user: {
        data: {
          isCustomer: true
        }
      }
    }
  },

  getters: {
    auth (state) {
      return state.auth
    }
  }
})
