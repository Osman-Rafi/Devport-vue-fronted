<template>
  <div>
    <Header />
    <b-row class="justify-content-center mt-6 mx-3">
      <b-col lg="7" sm="12">
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "@/common/components/Layout/Header/Common/Header";
import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "PortfolioLayout",
  components: {
    Header,
    BRow,
    BCol,
  },
};
</script>

<style scoped></style>
