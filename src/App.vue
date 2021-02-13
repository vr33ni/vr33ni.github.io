<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <the-navbar />
    <HelloWorld msg="Welcome to Vr33ni's SPA"/>
      <the-footer />
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import TheNavbar from './components/global/TheNavbar.vue'
import TheFooter from './components/global/TheFooter.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    TheNavbar,
    TheFooter
  }
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
