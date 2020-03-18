import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
// user.state = { user: { id: '00123', name: 'Anin' } }
import * as event from '@/store/modules/event'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
    categories: ['Technology', 'Sports', 'Media', 'Regional', 'Environmental']
  }
})
