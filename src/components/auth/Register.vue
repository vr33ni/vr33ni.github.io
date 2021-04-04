<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Confirm password:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.password"
          placeholder="Confirm password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Food:" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-6"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <hr />
      <div class="row">
        <b-button :disabled="!form.valid" color="success" type="submit"
          >Submit</b-button
        >
        <b-button color="error" type="reset"> Reset Form</b-button>
      </div>
    </b-form>
    <div class="row mt-3">
     <p v-if="errorMessage">Error:

      {{ errorMessage }}
    </p>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
    <hr />
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    msg: "Register",

    form: {
      name: "",
      passwordShow: false,
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Password is Required"],
      food: null,
      checked: [],
    },
    foods: [
      { text: "Select One", value: null },
      "Carrots",
      "Beans",
      "Tomatoes",
      "Corn",
    ],
    show: true,
  }),
  computed: {
    ...mapGetters(["error"]),
    errorMessage() {
        return this.$store.state.error;
    }
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      //   if (this.$refs.form.validate()) {
      //     this.snackbar = true;
      this.registerWithFirebase();
      //   }
    },

    onReset(event) {
      event.preventDefault();
      this.$refs.form.reset();
    },

    registerWithFirebase() {
      const user = {
        email: this.form.email,
        password: this.form.password,
      };
      this.$store.dispatch("signUpAction", user);

    },
  },
};
</script>
