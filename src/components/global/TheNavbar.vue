<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-brand to="/">Vr33ni</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
          <b-navbar-nav>
            <b-nav-item to="/resume">Resumé</b-nav-item>
            <b-nav-item to="/work">Work</b-nav-item>
            <b-nav-item to="/training">Training</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <!-- <em>Login</em> -->
              Login
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item to="/register">Register</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// here we need the bootstrap vue components because the normal bootstrap toggleable is using jquery
// import BCollapse from 'bootstrap-vue/es/components/collapse/collapse';
// import BNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';

import { BNavbar } from "bootstrap-vue";

export default {
  components: {
    BNavbar,
  },
  //   data: () => ({
  //     routes: [
  //       { i18nTitle: 'navbar-header-app-title', name: 'home' },
  //       { i18nTitle: 'navbar-header-first-tab', name: 'tab1' },
  //     ],
  //   }),
};
</script>
