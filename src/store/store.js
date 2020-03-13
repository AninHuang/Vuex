import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'
import * as user from '@/store/modules/user'
// user.state = { user: { id: '00123', name: 'Anin' } }

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    categories: ['Technology', 'Sports', 'Media', 'Regional', 'Environmental'],
    events: [],
    eventsTotal: 0,
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      // Payload above are allowed a single variable or an object
      EventService.getEvents(perPage, page)
        .then(response => {
          // 透過 json-server 在 response header 回傳的 X-Total-Count 取得總事件件數
          commit(
            'SET_EVENTS_TOTAL',
            parseInt(response.headers['x-total-count'])
          )
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvent({ commit, getters }, id) {
      var event = getters.getEventById(id)

      if (event) {
        // 使用 getters，減少重複 call api
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
