// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
// import firebase from 'firebase'
import firebase from "../firebase";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  isLoading: false,
  posts: [],
  skills: null,
  user: null,
  status: null,
  error: null
};

//to handle state
const getters = {
  isLoading (state) {
    return state.isLoading
  },

  skills( state) {
    return state.skills
  },
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
  
  writeUserData() {
    firebase.ref('users/' + "userId").set({
      username: "name",
      email: "email",
      profile_picture : "imageUrl"
    });
  },

  getSkills({ commit }) {
    // commit('SET_IS_LOADING', true)
    const itemsRef = firebase.ref().child("skills");
    itemsRef.on("value", snapshot => {
      commit('SET_SKILLS', snapshot.val())
    });

    // var database = firebase;
    // database.ref().child("skills").get().then(function(snapshot) {
    //   if (snapshot.exists()) {
    //     commit('SET_SKILLS', snapshot.val())
    //     // commit('SET_IS_LOADING', false)

    //   }
    //   else {
    //     console.log("No data available");
    //     commit('SET_SKILLS', null)
    //     // commit('SET_IS_LOADING', false)
    //   }
    // }).catch(function(error) {
    //   console.error(error);
    //   // commit('SET_IS_LOADING', false)

    // });    
  },

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
  SET_IS_LOADING(state, currLoadingStatus) {
    state.isLoading = currLoadingStatus;
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_SKILLS(state,payload) {
    state.skills = payload
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
