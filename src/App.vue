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
    if (currentPath === "/") {
      this.$router.push("/profile");
    }
  },
};
</script>
