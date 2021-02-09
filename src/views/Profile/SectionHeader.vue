<template>
  <div class="d-flex justify-content-between pt-4 border-bottom mb-3">
    <p class="font-weight-700 fs--1 mb-0 title-border px-2">
      {{ sectionTitle }}
    </p>
    <b-link class="text-black-50" :to="addMoreRoute">
      <font-awesome-icon icon="plus" class="mr-1" />
    </b-link>
  </div>
</template>

<script>
import { BLink } from "bootstrap-vue";

export default {
  name: "SectionHeader",
  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
    addMoreRoute: {
      type: String,
    },
  },
  components: {
    BLink,
  },
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
