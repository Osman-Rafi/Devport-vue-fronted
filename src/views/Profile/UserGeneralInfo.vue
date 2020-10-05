<template>
  <div>
    <b-img
      :src="require('../../assets/img/avatar/Male-avatar.jpg')"
      rounded="circle border"
      class="w-50"
    ></b-img>
    <div class="mt-3">
      <h1 class="font-weight-600 mb-0">Osman Rafi</h1>
      <p class="text-black-50 fs-3">osman-rafi</p>
      <b-button variant="outline-default" class="px-5 py-1"
        >Edit Profile</b-button
      >
      <p class="mt-3 fs--1">
        <font-awesome-icon icon="map-marker-alt" />
        Sylhet, Bangladesh
      </p>
      <p class="fs--2 mt-4">
        <span class="mr-2">
          <font-awesome-icon icon="project-diagram" />
          2 Projects
        </span>
        <span>
          <font-awesome-icon icon="edit" />
          4 Blog posts
        </span>
      </p>
      <hr />
      <div>
        <p class="font-weight-700 mb-0">Software Engineer</p>
        <p class="text-primary fs--1">
<!--          <font-awesome-icon icon="uncharted" />-->
          Console Axes
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { BImg, BButton } from "bootstrap-vue";
export default {
  name: "UserGeneralInfo",
  components: {
    BImg,
    BButton,
  },
};
</script>

<style scoped></style>
