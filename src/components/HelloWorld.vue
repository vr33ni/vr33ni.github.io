<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
   
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    

    <!-- <instagram-embed
  :url="'https://www.instagram.com/p/CD3A_goH49p/?utm_source=ig_web_copy_link'"
  :max-width=500
/>
-->

  <!-- <vue-instagram token="267636651650572|jnYsJ2kknfAXD4XovYrQOjqKEZ8" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
    <template slot="feeds" slot-scope="props">
      <li class="fancy-list"> "{{ props.feed }}" </li>
    </template>
    <template slot="error" slot-scope="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </vue-instagram>  -->

<div class="row justify-content-center align-items-center">
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>



  </div>

</template>

<script>
// import VueInstagram from 'vue-instagram'
// import InstagramEmbed from 'vue-instagram-embed';

export default {
  name: 'HelloWorld',
  //  components: {
  //   VueInstagram,
  //  InstagramEmbed
  // },
  props: {
    msg: String,
    feed: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
