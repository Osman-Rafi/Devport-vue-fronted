<template>
  <b-row>
    <b-col sm="8">
      <UserSummary />
      <Education />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import UserSummary from "./UserSummary";
import Education from "./Education";
export default {
  name: "Profile",
  title() {
    return "Devport-Profile";
    // return `Devport-${this.user.name}`
  },
  components: {
    BRow,
    BCol,
    UserSummary,
    Education,
  },
};
</script>

<style scoped></style>
