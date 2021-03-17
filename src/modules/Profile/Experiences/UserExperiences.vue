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
            class="d-flex justify-content-between border-0 pl-0"
            v-for="(experience, index) in userExperience"
            :key="index"
          >
            <SummaryContainer
              :logo="experience.organization.logo"
              :title="experience.organization.name"
              :subtitle="experience.organization.description"
            >
              <template v-slot:additional-info>
                <p class="mb-0 fs--1 font-weight-600">
                  {{ experience.designation }}
                </p>
                <div class="d-flex fs--1 text-black-60">
                  <p class="mb-0">
                    {{ experience.start_year }} to
                    <template v-if="experience.currently_working">
                      Present
                    </template>
                    <template v-else>
                      {{ experience.end_year }}
                    </template>
                  </p>
                  <p class="mx-2 mb-0">·</p>
                  <p class="mb-0">
                    {{ experience.organization.country }},
                    {{ experience.organization.city }}
                  </p>
                </div>
              </template>
              <template v-slot:action-buttons>
                <div class="d-flex mt-1">
                  <b-button
                    variant="link"
                    class="p-0 my-0 ml-0 no-underline fs--1 mr-3 text-blue font-weight-600"
                    v-b-modal.edit-education-modal
                    @click="userEducation = education"
                    >Edit or add details</b-button
                  >
                  <b-button
                    variant="link"
                    class="p-0 m-0 no-underline fs--1 text-blue font-weight-600"
                    v-b-modal.delete-education
                    @click="userEducation = education"
                    >Remove</b-button
                  >
                </div>
              </template>
            </SummaryContainer>
          </b-list-group-item>
        </b-card>
      </template>
    </spinner>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader";
import Spinner from "@/common/components/Spinner/Spinner";
import SummaryContainer from "../SummaryContainer";
import EmptyField from "@/common/components/Cards/EmptyField";
import { BCard, BListGroupItem, BButton } from "bootstrap-vue";
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
    SummaryContainer,
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
        this.loading = false;
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
