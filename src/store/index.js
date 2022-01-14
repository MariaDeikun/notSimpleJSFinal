import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'
import events from './modules/events'
import magazine from './modules/magazine'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    news,
    events,
    magazine,
  }
})
