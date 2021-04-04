import Vue from "vue";
import Router from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import Resume from "../components/Resume.vue";
import Training from "../components/Training.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Register from "../components/auth/Register.vue";
import store from '../store'


Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicy
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
  
  // {
  //   path: "/resume",
  //   hash: "#edu",
  //   name: "resume",
  //   component: Resume,
  //   beforeEnter: (to, from, next) => {
  //     console.log("before route enter");
  //     store.dispatch("getResumeTimelineEntries").then( response => {
  //        //store the data somewhere accessible
  //        console.log("before route enter resume", response);
  //        next()
  //     })
  //   },
  // },
  {
    path: "/training",
    name: "training",
    component: Training
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && store.state.user.authenticated == false) {
      store.commit("setGlobalError", "You need to log in before you can perform this action.")
      next("/Login")
  } else {
   
      next()
  }
})

export default router;