<template>
  <b-row class="justify-content-center vh-100 align-items-center">
    <b-col sm="12" lg="8" xl="6">
      <div class="mini-layout-login-body">
        <b-row>
          <b-col
            class="text-center left-container register-left-container d-none d-md-block"
          >
            <h2 class="mt-7">Register</h2>
            <p class="mt-4 font-weight-semi-bold">Welcome!</p>
            <p class="mt-13">
              already have an account ?
              <router-link
                to="/login"
                class="text-decoration-none font-weight-bold text-black-50"
                >Login
              </router-link>
            </p>
          </b-col>
          <b-col class="right-container">
            <div class="border-bottom mb-4 d-block d-md-none">
              <h3>Register</h3>
              <p>
                Already have an account?
                <router-link to="/login">Login</router-link>
              </p>
            </div>
            <div class="right-content">
              <b-form @submit.prevent="handleRegister">
                <b-form-group>
                  <b-form-row>
                    <b-col>
                      <b-form-input
                        type="text"
                        placeholder="First name"
                        v-model="firstName"
                      ></b-form-input>
                      <error-message :message="errors.firstName" />
                    </b-col>
                    <b-col>
                      <b-form-input
                        type="text"
                        placeholder="Surename"
                        v-model="sureName"
                      ></b-form-input>
                      <error-message :message="errors.sureName" />
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
                <p class="my-4 fs--2 font-weight-semi-bold">
                  Devport is protected by
                  <a href="#">Privacy Policy</a> and
                  <a href="#">Terms of Service</a>.
                </p>

                <b-button type="submit" block variant="primary"
                  >Register
                </b-button>
              </b-form>
            </div>
            <b-form-group class="oauth-login mt-5 mt-lg-7">
              <div class="ride-line">
                <span
                  >or Register with
                  <span class="fs--2 px-0"> (Coming soon) </span>
                </span>
              </div>
              <div class="icon-group">
                <b-form-row class="justify-content-center">
                  <router-link
                    disabled
                    to="#"
                    class="login-btn login-btn-google"
                  >
                    Google
                  </router-link>

                  <router-link
                    disabled
                    to="#"
                    class="login-btn login-btn-facebook"
                  >
                    Facebook
                  </router-link>

                  <router-link
                    disabled
                    to="#"
                    class="login-btn login-btn-github"
                  >
                    Github
                  </router-link>
                </b-form-row>
              </div>
            </b-form-group>
            <p class="mb-7 fs--1 font-weight-semi-bold">
              By signing in, I agree to the
              <a href="#">Privacy Policy</a> and
              <a href="#">Terms of Service</a>.
            </p>
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BForm,
  BFormRow,
  BFormGroup,
  BFormInput,
  BFormRadioGroup,
  BFormRadio,
  BButton,
} from "bootstrap-vue";

import ErrorMessage from "../../common/components/FormFields/ErrorMessage";
import { mapActions } from "vuex";
import { notificationToast } from "../../common/components/NotificationToast";

export default {
  name: "Register",
  title() {
    return "Devport-Register";
  },
  components: {
    BRow,
    BCol,
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
      firstName: "",
      sureName: "",
      email: "",
      password: "",
      gender: "",
      errors: {},
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    async handleRegister() {
      try {
        const res = await this.register({
          firstName: this.firstName,
          sureName: this.sureName,
          email: this.email,
          password: this.password,
          gender: this.gender,
        });
        if (res.status === 201) {
          await this.$router.push({ path: "/profile" });
        }
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000",
          "top-left"
        );
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./auth.scss" />
