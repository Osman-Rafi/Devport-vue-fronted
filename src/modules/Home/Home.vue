<template>
  <div>
    <b-row class="justify-content-center">
      <b-col sm="9">
        <Banner />
        <SelectedContents />
        <IndicateAvailability /> </b-col
    ></b-row>
  </div>
</template>

<script>
import Banner from "./Banner";
import SelectedContents from "./SelectedContents";
import IndicateAvailability from "./IndicateAvailability";
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "Home",
  components: {
    Banner,
    SelectedContents,
    IndicateAvailability,
    BRow,
    BCol,
  },
};
</script>

<style scoped></style>
