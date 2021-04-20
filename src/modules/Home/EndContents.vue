<template>
  <div class="my-8 px-3">
    <div class="border-bottom">
      <b-row class="justify-content-between mx-3 mb-6">
        <b-col order="2" order-lg="1" sm="12" lg="4" class="text-center">
          <b-img class="w-100 d-lg-none" fluid :src="banner" />
          <div class="d-none d-lg-block banner-circle-container"></div>
        </b-col>
        <b-col order="1" order-lg="2" sm="12" lg="6" class="mb-5 mb-lg-0">
          <h2 class="font-weight-bold mb-3 mt-4 fs-3">
            Participate in our insider program
          </h2>
          <p class="font-weight-semi-bold">
            You can participate in our insider program and get awarded with
            stock options if you contribute and invite friends, classmates or
            colleagues
          </p>
          <b-button variant="outline-primary" size="sm" class="mt-3"
            >Learn more
          </b-button>
        </b-col>
      </b-row>
    </div>
    <b-row class="justify-content-center mt-8">
      <b-col lg="5" class="text-center">
        <h4 class="fs-5 font-weight-bold mb-4">
          Join now & create your portfolio
        </h4>
        <b-button variant="primary" to="/register" class="px-5 py-2"
          >Join now</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BImg, BButton } from "bootstrap-vue";
import banner from "@/assets/img/banner/pexels-janez-podnar-1424239.jpg";

export default {
  name: "EndContents",
  components: {
    BRow,
    BCol,
    BImg,
    BButton,
  },
  data() {
    return {
      banner,
    };
  },
};
</script>

<style scoped lang="scss" src="./Home.scss" />
