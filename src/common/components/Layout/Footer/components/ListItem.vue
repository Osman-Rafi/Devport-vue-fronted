<template>
  <li class="mb-3">
    <router-link :to="link" class="text-decoration-none fs--1">
      {{ title }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: { type: String, required: true },
    link: { type: String, default: "/" },
  },
};
</script>

<style scoped></style>
