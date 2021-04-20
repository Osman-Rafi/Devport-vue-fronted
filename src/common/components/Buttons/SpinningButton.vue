<template>
  <b-button :type="buttonType" :block="buttonBlock" :variant="buttonVariant">
    <b-spinner
      v-if="spin"
      small
      :type="spinnerType"
      :variant="spinnerVariant"
    ></b-spinner>
    {{ buttonTitle }}
  </b-button>
</template>

<script>
import { BButton, BSpinner } from "bootstrap-vue";

export default {
  name: "SpinningButton",
  components: {
    BButton,
    BSpinner,
  },
  props: {
    spin: { type: Boolean, required: true },
    spinnerType: { type: String },
    spinnerVariant: { type: String },
    buttonTitle: { type: String },
    buttonType: { type: String },
    buttonBlock: { type: Boolean, default: false },
    buttonVariant: { type: String, default: "primary" },
  },
};
</script>

<style scoped></style>
