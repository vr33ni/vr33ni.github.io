<template>
  <div class="footer bt-footer justify-content-between">
    <span class="float-left">
      <a class="bt-footer-item" href="/">
        © Vr33ni
      </a>
        <a class="bt-footer-item" href="https://www.linkedin.com/in/verena-lechner/">
         <b-icon icon="linkedin" aria-hidden="true"></b-icon>
      </a>
       
        <a class="bt-footer-item" href="https://www.instagram.com/vr33ni">
         <b-icon icon="instagram" aria-hidden="true"></b-icon>
      </a>
        <a class="bt-footer-item" href="https://www.youtube.com/vr33ni">
         <b-icon icon="youtube" aria-hidden="true"></b-icon>
      </a>
    </span>

    <span class="float-right"
      ><a class="bt-footer-item" href="#">Terms of use</a></span
    >

    <span class="float-right"
      >     
      <router-link to="/privacy-policy" class="bt-footer-item">Privacy Policy</router-link>
      </span
    >

    <span class="float-right"
      ><a class="bt-footer-item" href="#">Disclaimer</a></span
    >
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
export default {
  components: {BIcon},
};
</script>
