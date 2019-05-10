import Vue from 'vue'
import Vuex from 'vuex'
import { db } from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: null,
  },
  mutations: {
    setTodos: (state, todos) => state.todos = todos
  },
  actions: {
    getTodos: ({ commit }) => {
      // TODO
    }
  }
})