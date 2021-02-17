// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
import firebase from 'firebase'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  posts: [],
  user: null,
  status: null,
  error: null
};

//to handle state
const getters = {
  status (state) {
    return state.status
  },

  user (state) {
    return state.user
  },

  error (state) {
    return state.error
  }
};

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      commit("SET_POSTS", response.data);
    });
  },
   signUpAction ({ commit }, payload) {
      commit('setStatus', 'loading')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          alert('success')
          // response will have user
          // user will have uid will be updated to the state
          commit('setUser', response.user.uid)
          commit('setStatus', 'success')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },
    signInAction ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit('setUser', response.user.uid)
          commit('setStatus', 'success')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },

    signOutAction ({ commit }) {
      firebase.auth().signOut()
        .then((response) => {
          console.log("sign out status ", response)
          commit('setUser', null)
          commit('setStatus', 'success')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    }

  
};

//to handle mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  setUser (state, payload) {
    state.user = payload
  },

  removeUser (state) {
    state.user = null
  },

  setStatus (state, payload) {
    state.status = payload
  },

  setError (state, payload) {
    state.error = payload
  }
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
