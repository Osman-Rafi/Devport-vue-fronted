<template>
  <b-row class="mx-3">
    <b-col sm="12" lg="6" class="mb-5 mb-lg-9">
      <h2 class="font-weight-semi-bold fs-2">Welcome to Devport</h2>
      <h1 class="font-weight-bold fs-4 fs-lg-5 mb-lg-4">
        The professional network where your papers, articles and projects count
      </h1>
      <p class="mt-3 mb-4 fs-1">
        Devport is a community for students & professionals to connect, write
        and be open to jobs and opportunities
      </p>
      <b-button
        variant="primary"
        class="btn-join px-10 py-3 font-weight-semi-bold"
        >Join for free</b-button
      >
    </b-col>
    <b-col class="d-none d-lg-block">
      <b-img fluid :src="illustration"></b-img>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BButton, BImg } from "bootstrap-vue";
import illustration from "@/assets/img/illustrations/people-using-online.jpg";

export default {
  name: "Banner",
  components: {
    BRow,
    BCol,
    BButton,
    BImg,
  },
  data() {
    return {
      illustration,
    };
  },
};
</script>

<style scoped lang="scss" src="./Home.scss" />
