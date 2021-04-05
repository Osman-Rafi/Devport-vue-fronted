<template>
  <b-row class="justify-content-center py-5 mx-1">
    <b-col md="6">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "PortfolioLayout",
  components: {
    BRow,
    BCol,
  },
};
</script>

<style scoped></style>
