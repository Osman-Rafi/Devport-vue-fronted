<template>
  <b-row>
    <b-col sm="auto" class="pr-0">
      <b-avatar
        variant="info"
        size="9rem"
        :src="summary.profilePicture || profilePlaceholder"
        class="mr-3"
      ></b-avatar>
    </b-col>
    <b-col>
      <h2 class="font-weight-bold fs-3">{{ summary.fullName }}</h2>
      <p class="text-black-70 text-justify">
        {{ summary.bio }}
      </p>
      <p class="font-weight-bold fs-0">
        0 <span class="mx-2 font-weight-normal">Connections</span> 0
        <span class="mx-2 font-weight-normal">Followers</span> 0
        <span class="mx-2 font-weight-normal">Following</span>
      </p>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BAvatar } from "bootstrap-vue";
import profilePlaceholder from "@/assets/img/placeholder/profile-placeholder.png";

export default {
  name: "UserSummary",
  components: {
    BRow,
    BCol,
    BAvatar,
  },
  props: {
    summary: { type: Object, required: true },
  },
  data() {
    return {
      profilePlaceholder,
    };
  },
};
</script>

<style scoped></style>
