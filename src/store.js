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
    ],
    events: [
      { id: 1, title: 'event 1', organizer: 'organizer 1' },
      { id: 2, title: 'event 2', organizer: 'organizer 2' },
      { id: 3, title: 'event 3', organizer: 'organizer 3' }
    ],
    count: 0
  },
  mutations: {
    INCREMENT_COUNT(state, value) {
      state.count += value
    }
  },
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
    },
    // unDoneTodosCount: state => {
    //   return state.todos.filter(todo => !todo.done)
    // }
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
