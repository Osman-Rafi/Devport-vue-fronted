<template>
  <b-collapse class="sidebar-collapse" id="sidebar-collapse" :visible="true">
    <nav :class="{ sidebar: true }">
      <ul class="nav">
        <nav-link
          v-for="(item, index) in sidebarItems"
          :key="index"
          :header="item.label"
          :link="item.link"
          :icon="item.icon"
        />
      </ul>
    </nav>
  </b-collapse>
</template>

<script>
import { BCollapse } from "bootstrap-vue";
import NavLink from "./NavLink/NavLink";
export default {
  name: "Sidebar.vue",
  components: {
    NavLink,
    BCollapse,
  },
  data() {
    return {
      sidebarItems: [
        {
          icon: {
            prefix: "far",
            iconName: "user-circle",
          },
          label: "Profile",
          link: "/profile",
        },
        {
          icon: {
            prefix: "far",
            iconName: "bell",
          },
          label: "Notifications",
          link: "notification",
        },
        {
          icon: {
            prefix: "far",
            iconName: "envelope",
          },
          label: "Messages",
          link: "messages",
        },
        {
          icon: {
            prefix: "fab",
            iconName: "usps",
          },
          label: "Blog",
          link: "blog",
        },
        {
          icon: {
            iconName: "user-friends",
          },
          label: "Connections",
          link: "connections",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss" src="./Sidebar.scss" />
