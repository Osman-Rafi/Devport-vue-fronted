<template>
  <div>
    <SectionHeader section-title="Organizations" add-more-route="#">
      <create-user-experience />
    </SectionHeader>
    <spinner :loading="loading">
      <template v-if="userExperience.length === 0">
        <EmptyField title="Add your Experiences here with proper details" />
      </template>
      <template v-else>
        <b-card class="d-flex card-shadow">
          <b-list-group-item
            class="d-flex justify-content-between border-0"
            v-for="(experience, index) in userExperience"
            :key="index"
          >
            <div class="d-flex">
              <b-avatar
                variant="primary"
                size="4rem"
                :src="experience.organization.logo"
              ></b-avatar>
              <div class="fs-0 ml-3">
                <p class="font-weight-600 mb-0 fs-0">
                  {{ experience.organization.name }}
                </p>
                <p class="mb-2 text-black-70 fs--1">
                  {{ experience.organization.description }}
                </p>
                <p class="mb-0 fs--1 font-weight-600 text-black-70">
                  {{ experience.degree }}
                </p>
                <p
                  class="text-black-50 mb-0 text-black-60 fs--1"
                  v-if="experience.start_year"
                >
                  Form {{ experience.start_year }} to {{ experience.end_year }}
                </p>
                <div class="d-flex mt-1">
                  <b-button
                    variant="link"
                    class="p-0 my-0 ml-0 no-underline fs--1 mr-3 text-blue font-weight-600"
                    v-b-modal.edit-education-modal
                    @click="userExperience = experience"
                    >Edit or add details</b-button
                  >
                  <b-button
                    variant="link"
                    class="p-0 m-0 no-underline fs--1 text-blue font-weight-600"
                    v-b-modal.delete-education
                    @click="userExperience = experience"
                    >Remove</b-button
                  >
                </div>
                <hr v-if="index !== userExperience.length - 1" />
              </div>
            </div>
          </b-list-group-item>
        </b-card>
      </template>
    </spinner>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader";
import Spinner from "@/common/components/Spinner/Spinner";
import EmptyField from "@/common/components/Cards/EmptyField";
import { BCard, BListGroupItem, BAvatar, BButton } from "bootstrap-vue";
import { mapState } from "vuex";

import API from "@/api/Api";
import { notificationToast } from "@/common/components/NotificationToast";
export default {
  name: "UserExperiences",
  components: {
    SectionHeader,
    CreateUserExperience: () => import("./CreateUserExperience"),
    Spinner,
    EmptyField,
    BCard,
    BListGroupItem,
    BAvatar,
    BButton,
  },

  data() {
    return {
      experiences: [],
      userExperience: {},
      loading: false,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  created() {
    this.fetchUserExperiences();
  },
  methods: {
    async fetchUserExperiences() {
      this.loading = true;
      try {
        const res = await API.get(
          `experience/user-experiences/user/${this.user.id}`
        );
        console.log(res);
        this.userExperience = res.data.userExperiences;
        this.loading = false;
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000"
        );
      }
    },
    resetFormData() {
      this.userExperience = {};
    },
  },
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
