import Vue from "vue";
import Vuex from "vuex";
import value from './modules/value'; 
// Registering Vuex (just like any other vue plugin)
Vue.use(Vuex); // gives us some additional tools

export const store = new Vuex.Store({
  state: {
    // we can store all our properties inside this state object
    counter: 0,
    // value: 0, // for two way binding.  moved to separate module
  },

  getters: { // getters are used to access the state. 
    doubleCounter: state => {
      // every getter function will get state as an argument
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    },
    // value: state => state.value, moved to separate module 
  },

  // ALWAYS try to use mutations through actions and not directly in code (components)

  // mutations must always be SYCHRONOUS
  mutations: {
      increment: state => {
          // Unlike in react, you do not return a new state, you simply change it in Vue Vuex
          state.counter++
      },

      decrement: (state, payload) => { // muations also can get payload as second argument, see below
        if (payload) {
            state.counter -= payload
        } else {
            state.counter--
        }
      },
      addBy: (state, payload) => {
          state.counter += payload
      },
      // updateValue: (state, payload) => { 
      //   state.value = payload; 
      // }
  },

  // actions CAN be ASYNCHRONOUS
  actions: {
    increment: context => { // context will be passed by vuex automatically
        context.commit('increment') // 'increment' here is a mutation. 
        // do not confuse context with $store, it is different (somewhat similar tho)
    },
    asyncIncrement: ({ commit }) => { // you can also destrucure context 
        setTimeout(() => {
            commit('increment')
        }, 1000)
    },

    decrement: ({ commit }, payload) => { // second argument is payload, any data that was dispatched with actions
        commit('decrement', payload)
    },

    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload)
        }, 1000)
    },

    asyncAddAfter: ({ commit }, { add, after }) => { // when payload is an object with multiple properties
        setTimeout(() => {
            commit('addBy', add)
        }, after*1000)
    },

    // updateValue({commit}, payload) {
    //   commit('updateValue', payload)
    // }
  },
  
  // Load any modules here
  modules: {
    value,  // value contains state, getters, mutations and actions 
  }

});
