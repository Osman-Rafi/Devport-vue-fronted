<template>
  <b-container fluid>
    <b-row class="mt-3">
      <b-col md="3">
        <UserGeneralInfo />
      </b-col>
      <b-col md="8">
        <RecentBlogPost />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import UserGeneralInfo from "./UserGeneralInfo";
import RecentBlogPost from "./RecentBlogPost/RecentBlogPost";
export default {
  name: "Profile",
  components: {
    BContainer,
    BRow,
    BCol,
    UserGeneralInfo,
    RecentBlogPost,
  },
};
</script>

<style scoped></style>
