const state = {
    auth: window.Laravel.isLoggedin,
    user: window.Laravel.user
}

const mutations = {

}

const actions = {

}

const getters = {
    USER : state => {
        return state.user;
    },
    AUTH : state => {
        return state.auth;
    }
}

export default {
    state, getters, mutations, actions
}
