import Vue from "vue";
import Router from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import Resume from "../components/Resume.vue";
import Training from "../components/Training.vue";
import Work from "../components/Work.vue";
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
    component: Resume
  },
  {
    path: "/training",
    name: "training",
    component: Training
  },
  {
    path: "/work",
    name: "work",
    component: Work,
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