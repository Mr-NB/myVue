// initial state
const state = {

    token: window.localStorage.getItem('token') || '',
    user: window.localStorage.getItem('user') || '',
    role: window.localStorage.getItem('role') || 2,
    config: window.localStorage.getItem('config') || {},

}

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
    USER_INFO(state, payload) {
        state.token = payload.token
        state.user = payload.user
        state.role = payload.role
        state.config = payload.config

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}