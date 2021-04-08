<template>
  <div class="my-8">
    <b-row class="justify-content-between mx-3">
      <b-col order="2" order-lg="1" sm="12" lg="4" class="text-center">
        <b-img class="w-100 d-lg-none" fluid :src="banner" />
        <div class="d-none d-lg-block banner-circle-container"></div>
      </b-col>
      <b-col order="1" order-lg="2" sm="12" lg="6" class="mb-5 mb-lg-0">
        <h2 class="font-weight-bold mb-3">Indicate your availability</h2>
        <p class="font-weight-semi-bold">
          how on your profile whether you are available for internships & jobs,
          networking and connecting or collaborations
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-between mt-8">
      <b-col lg="5">
        <h2 class="font-weight-bold mb-3">Connect in your field of interest</h2>
        <p>
          Grow your personal network by connecting and following others with
          similar interests or work/educational knowledge
        </p>
      </b-col>
      <b-col lg="5"></b-col>
    </b-row>
  </div>
</template>

<script>
import { BImg, BRow, BCol } from "bootstrap-vue";
import banner from "@/assets/img/banner/Mid-Town_View.jpg";

export default {
  name: "IndicateAvailability",
  components: {
    BRow,
    BCol,
    BImg,
  },
  data() {
    return {
      banner,
    };
  },
};
</script>

<style scoped lang="scss" src="./Home.scss" />
