<template>
  <spinner :loading="loading">
    <user-summary :summary="portfolioData.userSummary" />
    <user-experience :experiences="portfolioData.userExperience" />
    <user-education :educations="portfolioData.userEducations" />
  </spinner>
</template>

<script>
import UserSummary from "./UserSummary";
import UserExperience from "./UserExperience";
import UserEducation from "./UserEducation";
import Spinner from "@/common/components/Spinner/Spinner";
import API from "@/api/Api";
import { notificationToast } from "@/common/components/NotificationToast";
export default {
  name: "UserPortfolio",
  title() {
    return this.pageTitle;
  },
  components: {
    Spinner,
    UserSummary,
    UserExperience,
    UserEducation,
  },
  data() {
    return {
      destinationUserName: this.$route.params.username,
      loading: false,
      portfolioData: {},
      pageTitle: "",
    };
  },
  computed: {
    /* pageTitle: function () {
      return `${this.portfolioData.userSummary.fullName} | Devport`;
    },*/
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      this.loading = true;
      try {
        const res = await API.get(
          `user-portfolio/users/${this.destinationUserName}`
        );
        if (res.status === 200) {
          this.portfolioData = res.data;
        } else {
          notificationToast(
            this,
            true,
            "Oppss !!",
            "Something went wrong!",
            "danger"
          );
        }
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000",
          "top-left"
        );
      }
      this.loading = false;
      console.log(this.pageTitle);
    },
  },
};
</script>

<style scoped></style>
