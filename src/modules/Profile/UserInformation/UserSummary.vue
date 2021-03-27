<template>
  <b-row class="ml-3">
    <b-col sm="auto" class="pr-0">
      <b-avatar
        variant="info"
        size="9rem"
        :src="profilePlaceholder"
        class="mr-3"
      ></b-avatar>
    </b-col>
    <b-col>
      <h2 class="font-weight-700 fs-3">Osman Goni Chowdhury</h2>
      <p class="fs-0 text-black-50">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae,
        facilis magni molestias nemo non nulla quos totam veritatis voluptatum!
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
</template>

<script>
import { BRow, BCol, BAvatar, BButton } from "bootstrap-vue";
import profilePlaceholder from "../../../assets/img/placeholder/profile-placeholder.png";
export default {
  name: "UserSummary",
  components: {
    BRow,
    BCol,
    BAvatar,
    BButton,
  },
  data() {
    return {
      profilePlaceholder,
    };
  },
};
</script>
