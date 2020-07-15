import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask (state, val) {
      state.tasks = [val, ...state.tasks]
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
