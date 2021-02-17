import Vue from "vue";
import Router from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import AboutMe from "../components/AboutMe.vue";
import Training from "../components/Training.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";
import Register from "../components/auth/Register.vue";


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
    path: "/about-me",
    name: "aboutme",
    component: AboutMe
  },
  {
    path: "/training",
    name: "training",
    component: Training
  },
  {
    path: "/work",
    name: "work",
    component: Work
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

export default router;