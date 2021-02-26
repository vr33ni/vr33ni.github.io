<template>
  <div class="card">
    <img class="card-img-top" :src="profileImg" alt="Profile image cap" />
    <div class="card-body">
      <h5 class="card-title">About me</h5>
      <p class="card-text">
       I am a software engineer with an interdisciplinary background, always eager to seek new challenges.
      </p>
       <hr/>
         <h5 class="card-title">Contact</h5>
      <a href="https://www.linkedin.com/in/verena-lechner/" class="card-link">
         <b-icon icon="linkedin" aria-hidden="true"></b-icon>
         </a>    
      <a :href="`mailto:${ email }`" class="card-link">
          <b-icon variant="secondary" icon="envelope" aria-hidden="true"></b-icon>
      </a>
        <a :href="`tel:+${ mobile }`" class="card-link">
          <b-icon variant="secondary" icon="telephone-fill" aria-hidden="true"></b-icon>
      </a>
       <a href="#" class="card-link">
          <b-icon variant="secondary" icon="github" aria-hidden="true"></b-icon>
      </a>
      <hr/>
    <h5 class="card-title">Skills</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    </div>
  </div>
</template>
<script>

import { BIcon } from 'bootstrap-vue'

export default {
  name: "AboutMeCard",
   components: {BIcon},
   mounted() {
    // this.isLoading = true;
    this.$store.dispatch("loadImage");
  },
  computed: {
    profileImg() {
      if (this.$store.state.resumeProfileImg != null) {
        return this.$store.state.resumeProfileImg;
      } else {
        return null;
      }
    },
    mobile() {
      return this.$t("mobile")
    },
      email() {
      return this.$t("email")
    }
  }
};
</script>
