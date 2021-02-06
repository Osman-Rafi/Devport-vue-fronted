<template>
  <b-container>
    <b-row class="justify-content-center align-items-center">
      <b-col md="5">
        <b-card>
          <div class="p-3">
            <h1>Register</h1>
            <p>Stay updated on your professional world</p>
            <b-form @submit.stop.prevent="handleRegister">
              <b-form-group>
                <b-form-row>
                  <b-col>
                    <b-form-input
                      type="text"
                      placeholder="First name"
                      v-model="first_name"
                    ></b-form-input>
                    <error-message :message="errors.first_name" />
                  </b-col>
                  <b-col>
                    <b-form-input
                      type="text"
                      placeholder="Surename"
                      v-model="sure_name"
                    ></b-form-input>
                    <error-message :message="errors.sure_name" />
                  </b-col>
                </b-form-row>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                ></b-form-input>
                <error-message :message="errors.email" />
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="password"
                  placeholder="New Password"
                  v-model="password"
                ></b-form-input>
                <error-message :message="errors.password" />
              </b-form-group>
              <b-form-group label="Gender">
                <b-form-radio-group id="gender" v-model="gender">
                  <b-form-radio value="male">Male</b-form-radio>
                  <b-form-radio value="female">Female</b-form-radio>
                  <b-form-radio value="custom">Custom</b-form-radio>
                </b-form-radio-group>
                <error-message :message="errors.gender" />
              </b-form-group>
              <b-button type="submit" variant="success" block
                >Register</b-button
              >
            </b-form>
            <p class="fs--3 mt-3">
              By clicking Sign Up, you agree to our <a href="#">Terms</a>,
              <a href="#">Data Policy</a> and <a href="#">Cookie Policy</a>. You
              may receive SMS notifications from us and can opt out at any time
            </p>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BForm,
  BFormRow,
  BFormGroup,
  BFormInput,
  BFormRadioGroup,
  BFormRadio,
  BButton,
} from "bootstrap-vue";

import ErrorMessage from "../../components/FormFields/ErrorMessage";

export default {
  name: "Register",
  title() {
    return "Devport-Register";
  },
  components: {
    BContainer,
    BRow,
    BCol,
    BCard,
    BForm,
    BFormRow,
    BFormGroup,
    BFormInput,
    BFormRadioGroup,
    BFormRadio,
    BButton,
    ErrorMessage,
  },
  data() {
    return {
      first_name: "",
      sure_name: "",
      email: "",
      password: "",
      gender: "",

      errors: {},
    };
  },
  methods: {
    handleRegister() {
      this.$store
        .dispatch("register", {
          first_name: this.first_name,
          sure_name: this.sure_name,
          email: this.email,
          password: this.password,
          gender: this.gender,
        })
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch((err) => {
          this.error = err.response.data.errors;
        });
    },
  },
};
</script>
