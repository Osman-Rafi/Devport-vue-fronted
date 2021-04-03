<template>
  <b-row>
    <b-col lg="10" sm="12">
      <UserSummary />
      <UserEducation />
      <UserOrganizations />
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from "vuex";
import { BRow, BCol } from "bootstrap-vue";
import UserSummary from "./UserInformation/UserSummary";
import UserEducation from "./Education/UserEducation";
import UserOrganizations from "./Experiences/UserExperiences";
export default {
  name: "Profile",
  title() {
    return `${this.userFirstName} ${this.userSureName} | Devport`;
  },
  components: {
    BRow,
    BCol,
    UserSummary,
    UserEducation,
    UserOrganizations,
  },
  computed: {
    ...mapState({
      userFirstName: (state) => state.auth.user.firstName,
      userSureName: (state) => state.auth.user.sureName,
    }),
  },
};
</script>

<style scoped></style>
