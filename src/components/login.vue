<template>

</template>

<script>
  import Vue from 'vue'
  import apiClient from '../services/api';

  export default {
    name: "login", data() {
      return {
        email: null,
        password: null,
        loading: false,
      };
    },
    methods: {

      async login() {
        this.loading = true; // can use this to triggle a :disabled on login button
        this.errors = null;

        try {
          await apiClient.get('/sanctum/csrf-cookie');
          await apiClient.post('/login', {
            email: this.email,
            password: this.password
          });

          // Do something amazing

        } catch (error) {
          this.errors = error.response && error.response.data.errors;
        }

        this.loading = false;
      },

    }
  }
</script>

<style scoped>

</style>
