<template>
  <b-row>
    <b-col sm="8">
      <UserSummary />
      <UserEducation />
      <UserOrganizations />
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from "vuex";
import { BRow, BCol } from "bootstrap-vue";
import UserSummary from "./UserSummary";
import UserEducation from "./Education/UserEducation";
import UserOrganizations from "./Organizations/UserOrganizations";
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
      userFirstName: (state) => state.auth.user.first_name,
      userSureName: (state) => state.auth.user.sure_name,
    }),
  },
};
</script>

<style scoped></style>
