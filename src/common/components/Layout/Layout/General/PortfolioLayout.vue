<template>
  <div>
    <Header />
    <b-row class="justify-content-center py-5 mx-1">
      <b-col md="6">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "../../Header/Common/Header";
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
