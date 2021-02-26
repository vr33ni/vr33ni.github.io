<template>
  <div class="container">
    <h1>{{ heading }}</h1>
    <!-- <h2>
      <em>{{ subHeading }}</em>
    </h2> -->
    <p>
      I love to write code and spend time upside down. (preferrably on my hands,
      mid-air or hanging from a wall)<br />
      Learn more about my background, what drives me and my professional
      expertise.
    </p>

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
          <div class="card">
            <a href="/resume">
              <div class="card-img">
                <img class="card-img-top" :src="resumeImg" alt="Resumé cap" />
                <div
                  class="card-img-overlay d-flex flex-column justify-content-between"
                >
                  <h4 class="card-title">Resumé</h4>
                </div>
              </div>
            </a>
          </div>

          <div class="card">
              <a href="/projects">
            <div class="card-img">
              <img class="card-img-top" :src="projectsImg" alt="Projects cap" />
              <div
                class="card-img-overlay d-flex flex-column justify-content-between"
              >
                <h4 class="card-title">Professional experience</h4>
              </div>
            </div></a>
          </div>

          <div class="card">
             <a href="/training">
            <div class="card-img">
              <img class="card-img-top" :src="trainingImg" alt="Training cap" />
              <div
                class="card-img-overlay d-flex flex-column justify-content-between"
              >
                <h4 class="card-title">Training</h4>
              </div>
              </div></a>
          </div>
        </b-card-group>
      </div>
      <div class="mt-3">
        <b-card-group deck>
          <div class="card">
              <a href="/contact">
            <div class="card-img">
              <img class="card-img-top" :src="soMeImg" alt="SoMe cap" />
              <div
                class="card-img-overlay d-flex flex-column justify-content-between"
              >
                <h4 class="card-title">Social media</h4>
              </div>
              <!-- <div class="card-body"><h5 class="card-title">Social Media</h5></div> -->
            </div></a>
          </div>

          <div class="card">
            <div class="card-img">
              <img class="card-img-top" :src="contactImg" alt="Contact cap" />
              <div
                class="card-img-overlay d-flex flex-column justify-content-between"
              >
                <h4 class="card-title">Contact</h4>
              </div>
              <!-- <div class="card-body"><h5 class="card-title">Contact</h5></div> -->
            </div>
          </div>

          <div class="card">
            <div class="card-img">
              <img class="card-img-top" :src="contactImg" alt="Contact cap" />
              <div
                class="card-img-overlay d-flex flex-column justify-content-between"
              >
                <h4 class="card-title">FAQ</h4>
              </div>
              <!-- <div class="card-body"><h5 class="card-title">FAQ</h5></div> -->
            </div>
          </div>
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
      heading: "Verena Lechner",
      subHeading: "- Curriculum Vitae -",
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
    projectsImg() {
      if (this.$store.state.homeImageProjects != null) {
        return this.$store.state.homeImageProjects;
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

.card-img {
  width: 100%;
  height: 100%;
  background-color: white; /* fallback color */
  background-position: center;
  background-size: cover;
  transition: all 0.3s ease-in-out;
  opacity: 1;
}
.card:hover .card-img,
.card:focus .card-img {
  transform: scale(1.02);
  opacity: 0.5;
}

.card:hover .card-img-overlay {
  color: black;
}

.card-img-overlay > h4,
.card-img-overlay > p {
  visibility: hidden;
}

.card-img-overlay:hover h4,
.card-img-overlay:hover p {
  visibility: visible;
}

.card:hover .card-img-overlay p {
  font-size: 1.5em;
  letter-spacing: 0.02em;
}
</style>
