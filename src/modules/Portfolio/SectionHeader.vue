<template>
  <div class="d-flex justify-content-between pt-4 border-bottom mb-4">
    <p class="font-weight-bold fs-0 mb-0 title-border px-2" :class="titleClass">
      {{ sectionTitle }}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
    titleClass: { type: String },
  },
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
