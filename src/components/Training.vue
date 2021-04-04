

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
      <div v-if="isLoading" class="loading">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
      />
    </div>
    <div v-else>
      <h3>tbd</h3>
      </div>
   
    <!-- <div v-for='post in posts' :key='post.id'>
  <h3>Post Title: </h3>  {{post.title}}
      <h3>Post Body: </h3>{{post.body}}
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'training',
  data () {
    return {
      msg: 'Training'
    }
  },
  computed: {
    posts() {
        console.log("posts", this.$store.state.posts)
    return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }
}
</script>

