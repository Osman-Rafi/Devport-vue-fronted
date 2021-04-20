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
      <div class="d-flex">
        <span v-for="(value, key, index) in socialLinks" :key="index">
          <a
            v-if="value.link"
            :href="'//' + value.link"
            target="_blank"
            class="text-black-70"
          >
            <template v-if="key === 'website'">
              <font-awesome-icon icon="globe-asia" class="fa-lg mx-2" />
            </template>
            <template v-else>
              <font-awesome-icon
                :icon="['fab', value.icon]"
                class="fa-lg mx-2"
              />
            </template>
          </a>
        </span>
      </div>
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
      socialLinks: {
        linkedin: { link: this.summary.linkedin, icon: "linkedin" },
        facebook: { link: this.summary.facebook, icon: "facebook" },
        github: { link: this.summary.github, icon: "github" },
        website: { link: this.summary.website, icon: "globe-asia" },
      },
    };
  },
};
</script>

<style scoped></style>
