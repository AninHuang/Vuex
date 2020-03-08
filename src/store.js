import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'testID123', name: 'Anin' },
    categories: ['Technology', 'Sports', 'Media', 'Regional', 'Environmental'],
    todos: [
      { id: 1, text: 'to do 1', done: true },
      { id: 2, text: 'to do 2', done: false },
      { id: 3, text: 'to do 3', done: true }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    unDoneTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    }
    // unDoneTodosCount: state => {
    //   return state.todos.filter(todo => !todo.done)
    // }
  }
})
