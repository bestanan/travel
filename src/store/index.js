import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: '北京'
  },
  mutations: {
    cityChange (state, name) {
      state.city = name
    }
  }
})

export default store
