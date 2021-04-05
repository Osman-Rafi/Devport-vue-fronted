<template>
  <b-navbar toggleable="md" class="app-header">
    <b-navbar-nav class="ml-auto navbar-nav-mobile">
      <b-nav-item>
        <font-awesome-icon :icon="['far', 'compass']" class="mr-3" size="lg" />
      </b-nav-item>
      <b-nav-item @click="logout">
        <font-awesome-icon icon="power-off" size="lg" class="mx-2" />
      </b-nav-item>
      <b-nav-item class="d-md-none" @click="switchSidebarMethod">
        <font-awesome-icon icon="bars" size="lg" class="mx-2" />
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { BNavbar, BNavbarNav, BNavItem } from "bootstrap-vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  components: {
    BNavbar,
    BNavbarNav,
    BNavItem,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ path: "/login" });
      });
    },
    ...mapActions("layout", ["switchSidebar"]),
    switchSidebarMethod() {
      if (this.sidebarClosed) {
        this.switchSidebar(false);
      } else {
        this.switchSidebar(true);
      }
    },
  },
  computed: {
    ...mapState("layout", {
      sidebarClosed: (state) => state.sidebarClose,
    }),
  },
};
</script>

<style lang="scss" src="./Header.scss" />
