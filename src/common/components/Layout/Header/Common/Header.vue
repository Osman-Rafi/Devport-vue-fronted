<template>
  <b-row class="justify-content-center navbar-common align-content-center">
    <b-col sm="12" md="9">
      <b-navbar>
        <b-navbar-brand>
          <router-link to="/">
            <img :src="logo" />
          </router-link>
        </b-navbar-brand>
        <div class="ml-auto d-flex align-items-center navigation-items">
          <template v-if="!isUserLoggedOut">
            <b-nav-item-dropdown no-caret right>
              <template slot="button-content">
                <b-avatar
                  variant="primary"
                  size="22"
                  text="O"
                  class="dropdown-avatar"
                ></b-avatar>
              </template>
              <b-dropdown-item disabled link-class="p-0">
                <div class="px-4">
                  <div>
                    <b-avatar
                      variant="primary"
                      size="22"
                      text="O"
                      class="dropdown-avatar"
                    ></b-avatar>
                  </div>
                  <div class="pt-2">
                    <p class="font-weight-bold fs--2 mb-0">
                      {{ user.fullName }}
                    </p>
                    <p class="fs--2">{{ user.email }}</p>
                  </div>
                </div>
                <hr />
              </b-dropdown-item>
              <b-dropdown-item link-class="fs--1" :to="user.userName">
                Public profile
              </b-dropdown-item>
              <b-dropdown-item @click.prevent="logoutAction" link-class="fs--1">
                Logout
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
          <template v-if="isUserLoggedOut">
            <b-navbar-nav class="mr-4 font-weight-semi-bold">
              <b-nav-item to="/login">Login</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-button
                variant="outline-secondary"
                class="font-weight-bold fs--1"
                to="/register"
              >
                Sign up
              </b-button>
            </b-navbar-nav>
          </template>
        </div>
      </b-navbar>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BNavbar,
  BNavbarBrand,
  BNavItemDropdown,
  BDropdownItem,
  BAvatar,
  BNavbarNav,
  BNavItem,
  BButton,
} from "bootstrap-vue";
import logo from "@/assets/img/logo/devport-logo-2.png";
import { mapState, mapActions } from "vuex";
import _isEmpty from "lodash/isEmpty";

export default {
  name: "Header",
  components: {
    BRow,
    BCol,
    BNavbar,
    BNavbarBrand,
    BNavItemDropdown,
    BDropdownItem,
    BAvatar,
    BNavbarNav,
    BNavItem,
    BButton,
  },
  data() {
    return {
      logo,
      dropdownItems: [{}],
    };
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
    isUserLoggedOut: function () {
      return _isEmpty(this.user);
    },
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async logoutAction() {
      await this.logout();
      await this.$route.push({ path: "/login" });
    },
  },
};
</script>

<style scoped lang="scss" src="./Header.scss"></style>
