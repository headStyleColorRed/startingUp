import Vue from 'vue'
import Vuex from 'vuex'
import  authModule from "./auth.js"

import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	  authModule
  },
  plugins: [vuexPersist.plugin],
})
