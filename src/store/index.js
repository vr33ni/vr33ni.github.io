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
  homeImageUrls: [],
  homeImageTraining:null,
  homeImageResume:null,
  homeImageContact:null,
  homeImageSoMe:null,
  homeImageWork:null,
  posts: [],
  skills: null,
  user: null,
  status: null,
  error: null,
};

//to handle state
const getters = {
  homeImageUrls(state) {
    return state.homeImageUrls;
  },

  homeImageTraining(state) {
    return state.homeImageTraining;
  },
  homeImageResume(state) {
    return state.homeImageResume;
  },
  homeImageContact(state) {
    return state.homeImageContact;
  },
  homeImageSoMe(state) {
    return state.homeImageSoMe;
  },
  homeImagework(state) {
    return state.homeImageWork;
  },
  skills(state) {
    return state.skills;
  },
  status(state) {
    return state.status;
  },

  user(state) {
    return state.user;
  },

  error(state) {
    return state.error;
  },
};

//to handle actions
const actions = {
  getImagesFromStorage({ commit }) {
      // var fileName = 'amagerstrandpark_webster.jpg';
    const storageRef = firebase
      .storage()
      .ref()
      // .child('images/')
      storageRef.listAll().then(res => {
        //for folders
        res.prefixes.forEach(folder => {
            console.log(folder);
        });
        // for files NAME and URL
        var imgUrls = []
        res.items.forEach(item => {        
            item.getDownloadURL().then(function (url) {
                var img = {imgName: item.name, imgUrl: url}
                imgUrls.push(img)
                if (item.name === "amagerstrandpark_webster.jpg") {
                  commit("SET_HOME_IMG_TRAINING", url);
                } 
                if (item.name === "contact_unsplash-height-200.png") {
                  commit("SET_HOME_IMG_CONTACT", url)
                }
                if (item.name === "code_unsplash.jpg"){
                  commit("SET_HOME_IMG_WORK", url)
                }
                if (item.name === "resume_unsplash.jpg"){
                  commit("SET_HOME_IMG_RESUME", url)
                }
                if (item.name === "SoMe_unsplash.jpg"){
                  commit("SET_HOME_IMG_SOME", url)
                }
            });   
        });
        commit("SET_HOME_IMG_URLS", imgUrls);
    })
  
  },

  getSkills({ commit }) {
    // commit('SET_IS_LOADING', true)
    const itemsRef = firebase
      .database()
      .ref()
      .child("skills");
    itemsRef.on("value", (snapshot) => {
      commit("SET_SKILLS", snapshot.val());
    });

  },

  getPosts({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      commit("SET_POSTS", response.data);
    });
  },

  signUpAction({ commit }, payload) {
    commit("setStatus", "loading");
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        alert("success");
        // response will have user
        // user will have uid will be updated to the state
        commit("setUser", response.user.uid);
        commit("setStatus", "success");
        commit("setError", null);
      })
      .catch((error) => {
        commit("setStatus", "failure");
        commit("setError", error.message);
      });
  },
  signInAction({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit("setUser", response.user.uid);
        commit("setStatus", "success");
        commit("setError", null);
      })
      .catch((error) => {
        commit("setStatus", "failure");
        commit("setError", error.message);
      });
  },

  signOutAction({ commit }) {
    firebase
      .auth()
      .signOut()
      .then((response) => {
        console.log("sign out status ", response);
        commit("setUser", null);
        commit("setStatus", "success");
        commit("setError", null);
      })
      .catch((error) => {
        commit("setStatus", "failure");
        commit("setError", error.message);
      });
  },
};

//to handle mutations
const mutations = {
  SET_HOME_IMG_URLS(state, imgUrls) {
    state.homeImageUrls = imgUrls;
  },
  SET_HOME_IMG_TRAINING(state, imgUrl) {
    state.homeImageTraining = imgUrl;
  },
  SET_HOME_IMG_RESUME(state, imgUrl) {
    state.homeImageResume = imgUrl;
  },
  SET_HOME_IMG_CONTACT(state, imgUrl) {
    state.homeImageContact = imgUrl;
  },
  SET_HOME_IMG_SOME(state, imgUrl) {
    state.homeImageSoMe = imgUrl;
  },
  SET_HOME_IMG_WORK(state, imgUrl) {
    state.homeImageWork = imgUrl;
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_SKILLS(state, payload) {
    state.skills = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },

  removeUser(state) {
    state.user = null;
  },

  setStatus(state, payload) {
    state.status = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
