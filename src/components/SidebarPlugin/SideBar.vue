<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light sidenav-bg p-0"
    id="sidenav-main"
  >
    <b-img
      :src="require('../../assets/img/logo/Devport-logo.png')"
      fluid
    ></b-img>
    <div class="pt-4 ml-4">
      <ul class="list-unstyled">
        <li v-for="item in sidebarItems" :key="item.label" class="mb-3">
          <router-link :to="item.link">
            <span style="color: #00d7ab">
              <font-awesome-icon :icon="item.icon" class="mr-2 fa-lg" />
            </span>
            <span class="font-weight-500 fs-0 text-white">{{
              item.label
            }}</span>
          </router-link>
        </li>
        <a href="" @click.prevent="logout">Logout</a>
      </ul>
    </div>
  </nav>
</template>

<script>
import { BImg } from "bootstrap-vue";
export default {
  name: "SideBar",
  components: {
    BImg,
  },
  data() {
    return {
      sidebarItems: [
        {
          label: "Profile",
          icon: "cog",
          link: "/profile",
        },
        {
          label: "Settings",
          icon: "cog",
          link: "/settings",
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("auth");
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ path: "/login" });
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
