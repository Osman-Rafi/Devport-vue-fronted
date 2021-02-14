<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const currentPath = this.$router.history.current.path;
    if (localStorage.getItem("access_token") && currentPath === "/") {
      this.$router.push("/profile");
    }
  },
};
</script>
