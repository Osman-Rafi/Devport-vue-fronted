<template>
  <b-nav vertical>
    <b-nav-item
      v-for="item in sidebarItems"
      :key="item.label"
      class="text-decoration-none font-weight-600 sidebar-link mb-3"
      :to="item.link"
      active-class="active-link"
    >
      <span class="mr-3">
        <font-awesome-icon
          v-if="item.icon.prefix"
          :icon="[item.icon.prefix, item.icon.iconName]"
          class="mr-1"
          size="lg"
        />
        <font-awesome-icon
          v-else
          :icon="item.icon.iconName"
          class="mr-1"
          size="lg"
        />
      </span>
      {{ item.label }}
    </b-nav-item>
  </b-nav>
</template>

<script>
import { BNav, BNavItem } from "bootstrap-vue";
export default {
  name: "Sidebar.vue",
  components: {
    BNav,
    BNavItem,
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

<style scoped lang="scss">
.sidebar-link {
  a {
    color: rgb(0, 0, 0);
  }
}
.active-link {
  color: #04777d !important;
  background-color: rgba(0, 0, 100, 0.05);
  border-radius: 25px;
  line-height: 40px;
}
</style>
