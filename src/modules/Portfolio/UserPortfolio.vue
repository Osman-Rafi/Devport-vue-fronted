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
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      this.loading = true;
      try {
        const res = await API.get(
          `user-portfolio/user/${this.destinationUserName}`
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
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
