<template>
  <div>
    <div v-if="loading" class="d-flex justify-content-center">
      <b-spinner
        :type="spinnerType"
        :variant="spinnerVariant"
        :style="spinnerSize"
      ></b-spinner>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { BSpinner } from "bootstrap-vue";
export default {
  name: "Spinner",
  components: {
    BSpinner,
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    spinnerType: {
      type: String,
    },
    spinnerVariant: {
      type: String,
      default: "secondary",
    },
    spinnerSize: {
      type: String,
      default: "width:3rem; height:3rem",
    },
  },
};
</script>
