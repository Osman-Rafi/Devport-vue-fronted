<template>
  <b-navbar>
    <b-navbar-brand> Navbar </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item> item </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavItem, BNavbarNav } from "bootstrap-vue";
export default {
  name: "Header",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavItem,
    BNavbarNav,
  },
};
</script>

<style scoped></style>
