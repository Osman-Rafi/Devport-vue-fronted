<template>
  <b-container>
    <b-row class="justify-content-center align-items-center">
      <b-col md="5">
        <b-card>
          <div class="p-3">
            <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
            <b-form @submit.stop.prevent="handleLogin">
              <b-form-group>
                <b-form-input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                ></b-form-input>
                <error-message :message="error.email" />
              </b-form-group>
              <b-form-group>
                <b-form-input
                  type="password"
                  placeholder="Password"
                  v-model="password"
                ></b-form-input>
                <error-message :message="error.password" />
              </b-form-group>
              <b-button variant="link">Forgot Password ?</b-button>
              <b-button type="submit" variant="primary" block>Sign in</b-button>
            </b-form>
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
  BFormGroup,
  BFormInput,
  BButton,
} from "bootstrap-vue";
import ErrorMessage from "../../common/components/FormFields/ErrorMessage";
import { mapActions } from "vuex";

export default {
  name: "Login",
  title() {
    return "Devport-Login";
  },
  components: {
    BContainer,
    BRow,
    BCol,
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      error: {},
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      await this.login({ email: this.email, password: this.password });
      await this.$router.push({ path: "/profile" });
    },
  },
};
</script>
