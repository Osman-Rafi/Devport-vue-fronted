<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import API from "@/api/Api";

export default {
  name: "App",
  created() {
    this.checkAuthStatus();
  },
  methods: {
    async checkAuthStatus() {
      if (localStorage.getItem("access_token")) {
        try {
          const res = await API.post("check-auth-status");
          if (res.status === 401) {
            this.$store.dispatch("logout").then(() => {
              this.$router.push({ path: "/login" });
            });
          }
        } catch (error) {
          if (error.response.status === 401) {
            this.$store.dispatch("clear_user_for_server_loss").then(() => {
              this.$router.push({ path: "/login" });
            });
          }
        }
      }
    },
  },
};
</script>
