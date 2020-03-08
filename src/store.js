import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'testID123', name: 'Anin' },
    categories: ['Technology', 'Sports', 'Media', 'Regional', 'Environmental']
  },
  mutations: {},
  actions: {}
})
