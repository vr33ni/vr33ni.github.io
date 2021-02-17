<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <the-navbar />
        <router-view class="center-content" /> <!-- need this here to make sure the router renders all new components here in the middle-->
    <!-- <HelloWorld msg="Welcome to Vr33ni's SPA" :feed="'https://www.instagram.com/p/CD3A_goH49p/?utm_source=ig_web_copy_link'"/> -->
      <the-footer />
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import TheNavbar from './components/global/TheNavbar.vue'
import TheFooter from './components/global/TheFooter.vue'



export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheNavbar,
    TheFooter
  },
  // data() {
  //   return process.env.VUE_APP_TITLE
  // }
}
</script>

<style lang="scss">
@import './assets/styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
