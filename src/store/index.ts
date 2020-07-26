import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [localStorage.getItem('tasks')] || []
  },
  mutations: {
    createTask (state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask ({ commit }, payload) {
      commit('createTask', payload)
    }
  },
  getters: {
    tasks: s => s.tasks
  },
  modules: {
  }
})
