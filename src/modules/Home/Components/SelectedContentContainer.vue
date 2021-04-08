<template>
  <b-card :img-src="img" img-top class="border-0 mb-3">
    <b-card-title title-tag="h6">
      {{ title }}
    </b-card-title>
    <p class="tag-line text-capitalize font-weight-semi-bold fs--1 mb-3">
      {{ tag }}
    </p>
    <b-card-text>
      <div class="mt-2">{{ description }}</div>
    </b-card-text>
  </b-card>
</template>

<script>
import { BCard, BCardText, BCardTitle } from "bootstrap-vue";

export default {
  name: "SelectedContentContainer",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String },
    img: { type: String },
  },
  components: {
    BCard,
    BCardText,
    BCardTitle,
  },
};
</script>

<style scoped>
.card {
  color: rgba(0, 0, 0, 0.8);
}

.card-title {
  font-size: 17px;
  font-weight: 700;
}

.card-text {
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
}

.tag-line {
  border-bottom: 1px solid green;
}
</style>
