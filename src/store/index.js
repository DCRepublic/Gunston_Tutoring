import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    IsMobile: false
  },
  mutations: {
    UPDATE_ISMOBILE(state, payload) {
      state.IsMobile = payload
    }
  },
  actions: {
    update_IsMobile(context, payload) {
      context.commit('UPDATE_ISMOBILE', payload)
    }
  },
  modules: {
  }
})
