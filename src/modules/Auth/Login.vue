<template>
  <b-row class="justify-content-center vh-100 align-items-center">
    <b-col sm="12" lg="8" xl="6">
      <div class="mini-layout-login-body">
        <b-row>
          <b-col
            class="text-center left-container login-left-container d-none d-md-block"
          >
            <h2 class="mt-7">SIGN IN</h2>
            <p class="mt-4 font-weight-semi-bold">Welcome back!</p>
            <p class="mt-13">
              New to Devport ?
              <router-link
                to="/register"
                class="text-decoration-none font-weight-bold text-black-50"
                >Sign up free
              </router-link>
            </p>
          </b-col>
          <b-col class="right-container">
            <div class="border-bottom mb-4 d-block d-md-none">
              <h3>Sign In</h3>
              <p>
                New to Devport?
                <router-link to="/register">Sign Up Free</router-link>
              </p>
            </div>
            <div class="right-content">
              <b-form @submit.prevent="handleLogin">
                <b-form-group label="Email Address">
                  <b-form-input
                    required
                    type="email"
                    v-model="email"
                  ></b-form-input>
                  <error-message :message="error.email" />
                </b-form-group>
                <b-form-group label="Password">
                  <b-form-input
                    required
                    type="password"
                    v-model="password"
                  ></b-form-input>
                  <error-message :message="error.password" />
                </b-form-group>
                <p class="my-4 fs--2 font-weight-semi-bold">
                  Devport is protected by
                  <a href="#">Privacy Policy</a> and
                  <a href="#">Terms of Service</a>.
                </p>
                <spinning-button
                  button-type="submit"
                  :button-block="true"
                  :button-title="loading ? 'Signing In..' : 'Sing In'"
                  :spin="loading"
                />
              </b-form>
            </div>
            <b-form-group class="oauth-login mt-5 mt-lg-7">
              <div class="ride-line">
                <span
                  >or Sign in with
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
  BFormGroup,
  BFormInput,
  BFormRow,
} from "bootstrap-vue";
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../common/components/FormFields/ErrorMessage";
import { notificationToast } from "../../common/components/NotificationToast";
import SpinningButton from "../../common/components/Buttons/SpinningButton";

export default {
  name: "Login",
  title() {
    return "Devport-Login";
  },
  components: {
    ErrorMessage,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BFormRow,
    SpinningButton,
  },
  data() {
    return {
      email: "",
      password: "",
      error: {},
      loading: false,
    };
  },
  computed: {
    ...mapState("auth", {
      firstName: (state) => state.user.firstName,
    }),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      this.loading = true;
      await this.login({ email: this.email, password: this.password });
      await this.$router.push({ path: "/profile" });
      this.loading = false;
      notificationToast(
        this,
        true,
        "Logged in",
        `Welcome ${this.firstName}`,
        "success"
      );
    },
  },
};
</script>

<style scoped lang="scss" src="./auth.scss" />
