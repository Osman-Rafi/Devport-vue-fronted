<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view> </router-view>
    </transition>
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

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
