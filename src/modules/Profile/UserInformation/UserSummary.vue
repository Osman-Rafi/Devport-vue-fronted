<template>
  <spinner :loading="loading">
    <b-row class="ml-3">
      <b-col sm="auto" class="pr-0">
        <b-avatar
          variant="info"
          size="9rem"
          :src="userSummary.profilePicture || profilePlaceholder"
          class="mr-3"
        ></b-avatar>
      </b-col>
      <b-col>
        <h2 class="font-weight-700 fs-3">{{ userSummary.fullName }}</h2>
        <p class="fs-0 text-black-50">
          {{ userSummary.bio }}
        </p>
        <p class="font-weight-500 fs-0">
          0 <span class="mx-2 font-weight-300">Connections</span> 0
          <span class="mx-2 font-weight-300">Followers</span> 0
          <span class="mx-2 font-weight-300">Following</span>
        </p>
      </b-col>
      <b-col sm="auto">
        <router-link to="edit-profile">
          <b-button variant="outline-primary" class="fs--2"
            >Edit Profile</b-button
          >
        </router-link>
      </b-col>
    </b-row>
  </spinner>
</template>

<script>
import { BRow, BCol, BAvatar, BButton } from "bootstrap-vue";
import profilePlaceholder from "../../../assets/img/placeholder/profile-placeholder.png";
import { mapState } from "vuex";
import { notificationToast } from "@/common/components/NotificationToast";
import API from "@/api/Api";
import Spinner from "@/common/components/Spinner/Spinner";
export default {
  name: "UserSummary",
  components: {
    Spinner,
    BRow,
    BCol,
    BAvatar,
    BButton,
  },
  data() {
    return {
      userSummary: {},
      profilePlaceholder,
      loading: false,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  methods: {
    async fetchUserSummary() {
      this.loading = true;
      try {
        const res = await API.get(`get-user-summary/user/${this.user.id}`);
        this.userSummary = res.data.user;
      } catch (error) {
        notificationToast(
          this,
          true,
          "Oppss !!",
          "Something went wrong ",
          "danger"
        );
      }
      this.loading = false;
    },
  },
  created() {
    this.fetchUserSummary();
  },
};
</script>
