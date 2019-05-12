import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setTodos: (state, todos) => state.todos = todos,
  },
  actions: {
    getTodos: ({ commit }) => {
      db.collection('Todos').get()
        .then(docs => {
          let temp = [];
          docs.forEach(doc => {
            const { title, content, priority, finished } = doc.data();
            const { id } = doc;
            temp.push({ id, title, content, priority, finished })
          });
          commit('setTodos', temp)
        })
    },
    deleteTodo: ({ commit, state }, id) => {
      db.collection('Todos').doc(id).delete()
        .then(() => {
          commit('setTodos', state.todos.filter(todo => todo.id !== id))
        })
    },
    toggleTodo: ({ dispatch }, todo) => {
      db.collection('Todos').doc(todo.id).update({ finished: !todo.finished })
        .then(() => dispatch('getTodos'))
    },
    addTodo: ({ commit, state }, todo) => {
      db.collection('Todos').add({ ...todo, finished: false })
        .then(docRef => {
          commit('setTodos', [{ ...todo, id: docRef.id, finished: false }, ...state.todos])
        })
    }
  }
})