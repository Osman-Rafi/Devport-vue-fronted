<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">Devport Logo</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <font-awesome-icon
            :icon="['far', 'compass']"
            class="mr-1"
            size="lg"
          />
        </b-nav-item>
      </b-navbar-nav>
      <b-nav-item-dropdown
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
        right
      >
        <template #button-content>
          <b-avatar variant="dark" text="O"></b-avatar>
        </template>
        <b-dropdown-item>Your public profile</b-dropdown-item>
        <b-dropdown-item>Settings</b-dropdown-item>
        <b-dropdown-item>
          <a href="" @click.prevent="logout" class="text-decoration-none"
            >Logout</a
          >
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem,
  BAvatar,
} from "bootstrap-vue";
export default {
  name: "Header",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    BAvatar,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ path: "/login" });
      });
    },
  },
};
</script>
