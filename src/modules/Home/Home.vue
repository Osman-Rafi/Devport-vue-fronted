<template>
  <div>
    <b-row class="justify-content-center">
      <b-col sm="9">
        <Banner />
        <SelectedContents />
        <IndicateAvailability />
        <SelectedUser />
        <EndContents />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Banner from "./Banner";
import { BRow, BCol } from "bootstrap-vue";
import SelectedContents from "./SelectedContents";
import IndicateAvailability from "./IndicateAvailability";
import SelectedUser from "./SelectedUser";
import EndContents from "./EndContents";

export default {
  name: "Home",
  title() {
    return "Home | Devport";
  },
  components: {
    Banner,
    BRow,
    BCol,
    SelectedContents,
    IndicateAvailability,
    SelectedUser,
    EndContents,
  },
};
</script>

<style scoped></style>
