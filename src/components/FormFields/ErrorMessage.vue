<template>
  <span v-if="message" class="fs--3 font-italic text-danger">
    {{ message[0] }}
  </span>
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    message: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
