import Vue from "vue";
import Vuex from "vuex";

// Registering Vuex (just like any other vue plugin)
Vue.use(Vuex); // gives us some additional tools

export const store = new Vuex.Store({
  state: {
    // we can store all our properties inside this state object
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      // every getter function will get state as an argument
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    }
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
      }
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
    }
  }  
});
