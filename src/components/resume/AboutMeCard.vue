<template>
  <div class="card mb-5">
    <img class="card-img-top" :src="profileImg" alt="Profile image cap" />
    <div class="card-body">
      <h5 class="card-title">About me</h5>
      <p class="card-text">
        I am a software engineer with an interdisciplinary background, always
        eager to seek new challenges.
      </p>
      <hr />
      <h5 class="card-title">Contact</h5>
      <a href="https://www.linkedin.com/in/verena-lechner/" class="card-link">
        <b-icon icon="linkedin" aria-hidden="true"></b-icon>
      </a>
      <a :href="`mailto:${email}`" class="card-link">
        <b-icon variant="secondary" icon="envelope" aria-hidden="true"></b-icon>
      </a>
      <a :href="`tel:+${mobile}`" class="card-link">
        <b-icon
          variant="secondary"
          icon="telephone-fill"
          aria-hidden="true"
        ></b-icon>
      </a>
      <a href="#" class="card-link">
        <b-icon variant="secondary" icon="github" aria-hidden="true"></b-icon>
      </a>
      <hr />
      <h5 class="card-title" id="skills">Skills</h5>

      <div
        v-for="tag in skillTags"
        :key="tag.name"
        class="tag"
        v-on:click="learnMore(tag)" 
       v-b-popover.hover.top="popoverConfig(tag)" :title="tag.name"
       
      >
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { BIcon } from "bootstrap-vue";

export default {
  name: "AboutMeCard",
  components: { BIcon },
  props: {
    profileImg: {
      type: String,
      default: () => "",
    },
    skillTags: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    mobile() {
      return this.$t("mobile");
    },
    email() {
      return this.$t("email");
    },
  },
  methods: {
    popoverConfig(tag) {
        return {
          html: true,
          title: () => {
            return tag.name
          },
          content: () => {
            return 'Proficiency: ' + tag.proficiency + '<br />Projects: ' + tag.projects
          }
        }
      },
    learnMore(tag) {
      this.hover = true;
      console.log("learn more about ", tag.proficiency);
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  border:1px solid #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag:hover {
  background-color: #ffffff;
  border:1px solid black;

}

// .tooltip {
//   width: 100px;
// }
// .tooltip .tooltip-inner{
//   max-width: 500px !important;
//   width: 400px !important;
// }

// .tooltip-inner {
//   text-align: left!important;
// }
.my-tooltip-class {
  text-align: left !important;
}
</style>
