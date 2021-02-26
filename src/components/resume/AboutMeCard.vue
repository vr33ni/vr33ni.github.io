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
    <h5 class="card-title" id="skills">Skills</h5>
     <div v-for='tag in skillTags' :key='tag' class='tag-__tag'>
      {{ tag.name }}
    </div>
   
    </div>
  </div>
</template>
<script>

import { BIcon } from 'bootstrap-vue'

export default {
  name: "AboutMeCard",
   components: {BIcon},
    props: {
    profileImg: {
      type: String,
      default: () => "",
    },
     skillTags: {
      type: Array,
      default: () => ['Hello', 'World'],
    },
    },
  computed: {
    mobile() {
      return this.$t("mobile")
    },
      email() {
      return this.$t("email")
    }
  }
};
</script>


<style lang="scss" scoped>
.tag-__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

</style>