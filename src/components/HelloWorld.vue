<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>

    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
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

    <div class="mb-5">
      <div>
        <b-card-group deck>
          <div class="bg-image hover-zoom">´
            <img :src="resumeImg" class="w-100">
            <b-card no-body header="Resumé" :img-src="resumeImg"> </b-card>
          </div>
          <b-card no-body header="Work" :img-src="workImg"> </b-card>

          <b-card no-body header="Training" :img-src="trainingImg"> </b-card>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <b-card no-body header="Social media" :img-src="soMeImg"> </b-card>

          <b-card no-body header="Contact" :img-src="contactImg"> </b-card>

          <b-card no-body header="FAQ"> </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
// import VueInstagram from 'vue-instagram'
// import InstagramEmbed from 'vue-instagram-embed';
import "../store";
// <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-storage.js"

export default {
  name: "HelloWorld",
  //  components: {
  //   VueInstagram,
  //  InstagramEmbed
  // },
  data() {
    return {
      isLoading: false,
      msg: "Welcome",
    };
  },
  computed: {
    trainingImg() {
      if (this.$store.state.homeImageTraining != null) {
        return this.$store.state.homeImageTraining;
      } else {
        return null;
      }
    },
    resumeImg() {
      if (this.$store.state.homeImageResume != null) {
        return this.$store.state.homeImageResume;
      } else {
        return null;
      }
    },
    workImg() {
      if (this.$store.state.homeImageWork != null) {
        return this.$store.state.homeImageWork;
      } else {
        return null;
      }
    },
    soMeImg() {
      if (this.$store.state.homeImageSoMe != null) {
        return this.$store.state.homeImageSoMe;
      } else {
        return null;
      }
    },

    contactImg() {
      if (this.$store.state.homeImageContact != null) {
        return this.$store.state.homeImageContact;
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.isLoading = true;
    this.$store.dispatch("getImagesFromStorage").then(() => {
      this.isLoading = false;
    });
  },
  methods: {},
};
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

.card-img-top {
  width: 100%;
  height: 15px;
  object-fit: cover;
}
</style>
