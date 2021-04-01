<template>
  <li :class="{ sidebarLink: true, className }">
    <router-link :to="link" class="sidebar-link">
      <span class="icon">
        <font-awesome-icon
          v-if="icon.prefix"
          :icon="[icon.prefix, icon.iconName]"
          class="mr-1"
          size="lg"
        />
        <font-awesome-icon
          v-else
          :icon="icon.iconName"
          class="mr-1"
          size="lg"
        />
      </span>
      {{ header }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    link: { type: String, default: "" },
    header: { type: String, default: "" },
    className: { type: String, default: "" },
    icon: { type: Object },
  },
};
</script>

<style scoped lang="scss" src="./NavLink.scss" />
