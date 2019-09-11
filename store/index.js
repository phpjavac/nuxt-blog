import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    SearchDialogState: false,
    showNavDrawer: false
  },
  mutations: {
    showSearchDialogState(state, boolean) {
      if (!boolean) {
        state.SearchDialogState = !state.SearchDialogState
      } else {
        state.SearchDialogState = false
      }
    },
    OPEN_NAV_DRAWER(state) {
      state.showNavDrawer = !state.showNavDrawer
    }
  }
})

export default store