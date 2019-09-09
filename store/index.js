import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    SearchDialogState: false
  },
  mutations: {
    showSearchDialogState (state,boolean) {
        if(!boolean){
            state.SearchDialogState = !state.SearchDialogState
        }else{
            state.SearchDialogState = false
        }
        console.log(state.SearchDialogState,boolean)
    }
  }
})

export default store