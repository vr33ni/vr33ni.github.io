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
      <h3>Tbd</h3>
   <!-- <div v-if="programmingSkills != null">
      <h2>IT Skills:</h2>
        <div v-for="skill in programmingSkills" :key="skill.name">
          <h3>{{ skill.name }}</h3>
          {{ skill.proficiency }}
        </div>
      </div> -->
      </div> 
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";


export default {
  name: "Projects",
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      msg: "Projects",
    
    };
  },

  computed: {
    programmingSkills() {
      if (this.$store.state.skills != null) {
        return this.$store.state.skills.programming;
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.isLoading = true;
    this.$store.dispatch("getSkills").then(() => { this.isLoading = false });
  },
  methods: {
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script>
