<template>
  <div>
    <SectionHeader section-title="Organizations" add-more-route="#">
      <b-button
        class="text-black-50"
        variant="link"
        v-b-modal.add-experience-modal
        size="sm"
      >
        <font-awesome-icon icon="plus" class="mr-1" />
      </b-button>
    </SectionHeader>
    <spinner :loading="loading">
      <template v-if="experiences.length === 0">
        <EmptyField title="Add your Experiences here with proper details" />
      </template>
      <template v-else>
        <!--        <b-card class="d-flex card-shadow">
          <b-list-group-item
            class="d-flex justify-content-between border-0"
            v-for="(experience, index) in experiences"
            :key="index"
          >
            <div class="d-flex">
              <b-avatar
                variant="primary"
                size="4rem"
                :src="experience.education_institution.logo"
              ></b-avatar>
              <div class="fs-0 ml-3">
                <p class="font-weight-600 mb-0 fs-0">
                  {{ education.education_institution.institution_name }}
                </p>
                <p class="mb-0 fs&#45;&#45;1 font-weight-600 text-black-70">
                  {{ education.degree }}
                </p>
                <p
                  class="text-black-50 mb-0 text-black-60 fs&#45;&#45;1"
                  v-if="education.start_year"
                >
                  Form {{ education.start_year }} to {{ education.end_year }}
                </p>
                <div class="d-flex mt-1">
                  <b-button
                    variant="link"
                    class="p-0 my-0 ml-0 no-underline fs&#45;&#45;1 mr-3 text-blue font-weight-600"
                    v-b-modal.edit-education-modal
                    @click="userEducation = education"
                    >Edit or add details</b-button
                  >
                  <b-button
                    variant="link"
                    class="p-0 m-0 no-underline fs&#45;&#45;1 text-blue font-weight-600"
                    v-b-modal.delete-education
                    @click="userEducation = education"
                    >Remove</b-button
                  >
                </div>
                <hr v-if="index !== educations.length - 1" />
              </div>
            </div>
          </b-list-group-item>
        </b-card>-->
      </template>
    </spinner>
    <b-modal
      id="add-experience-modal"
      title="Add Experience"
      cancelTitle="Discard"
      okTitle="Save"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="handleAddNewExperience"
      @hide="resetFormData"
    >
      <CreateExperience
        v-model="userExperience"
        :handle-submit="handleAddNewExperience"
      />
    </b-modal>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader";
import CreateExperience from "./CreateOrEditExperience";
import {
  BButton,
  // BCard,
  // BListGroupItem,
  // BAvatar,
  BModal,
  VBModal,
} from "bootstrap-vue";
import Spinner from "@/common/components/Spinner/Spinner";
import EmptyField from "@/common/components/Cards/EmptyField";
export default {
  name: "UserExperiences",
  components: {
    CreateExperience,
    SectionHeader,
    BButton,
    // BCard,
    // BListGroupItem,
    // BAvatar,
    BModal,
    Spinner,
    EmptyField,
  },
  directives: {
    "b-modal": VBModal,
  },
  data() {
    return {
      experiences: [],
      userExperience: {},
      loading: false,
    };
  },
  methods: {
    async handleAddNewExperience(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
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
