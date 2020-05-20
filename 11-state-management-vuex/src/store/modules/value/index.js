import * as types from './types'; 
// Always use namespaces when using multiple store modules.

// You can furthur break down this files into separate state, getters, mutations and actions files. 

const state = {
    value: 0, // used for two way binding. 
}

const getters = {
    [types.GET_VALUE]: state => state.value, 
}

const mutations = {
    [types.UPDATE_VALUE]: (state, payload) => {
        state.value = payload
    }
}

const actions = {
    [types.UPDATE_VALUE]: ({commit}, payload) => {
        commit(types.UPDATE_VALUE, payload)
    }
}

export default {
    state, 
    getters , 
    mutations, 
    actions, 
}