<template>
  <b-card class="border-dashed text-center">
    <p class="mb-0 fs--2">{{ title }}</p>
  </b-card>
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  name: "EmptyField",
  components: {
    BCard,
  },
  props: {
    title: {
      type: String,
      default: "Add Your Information Here",
    },
  },
};
</script>

<style scoped></style>
