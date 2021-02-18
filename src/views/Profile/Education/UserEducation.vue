<template>
  <div>
    <SectionHeader section-title="Educations" add-more-route="#">
      <b-button
        class="text-black-50"
        variant="link"
        v-b-modal.add-education-modal
        size="sm"
      >
        <font-awesome-icon icon="plus" class="mr-1" />
      </b-button>
    </SectionHeader>
    <b-card class="d-flex">
      <spinner :loading="loading" type="grow">
        <b-list-group-item
          class="d-flex justify-content-between border-0"
          v-for="(education, index) in educations"
          :key="index"
        >
          <div class="d-flex">
            <b-avatar
              variant="primary"
              size="4rem"
              :text="education.school.charAt(0)"
            ></b-avatar>
            <div class="fs-0 ml-3">
              <p class="font-weight-600 mb-0 fs-0">
                {{ education.school }}
              </p>
              <p class="mb-0">{{ education.degree }}</p>
              <p class="text-black-50 mb-0" v-if="education.start_year">
                {{ education.start_year }} - {{ education.end_year }}
              </p>
              <hr v-if="index !== educations.length - 1" />
            </div>
          </div>
          <div>
            <b-button
              class="text-black-50"
              variant="link"
              v-b-modal.edit-education-modal
              size="sm"
              @click="userEducation = education"
            >
              <font-awesome-icon icon="pencil-alt" class="mr-1" />
            </b-button>
            <b-button
              class="text-black-50"
              variant="link"
              size="sm"
              @click="handleDeleteUserEducation(education)"
            >
              <span class="text-danger">
                <font-awesome-icon :icon="['far', 'trash-alt']" class="mr-1" />
              </span>
            </b-button>
          </div>
        </b-list-group-item>
      </spinner>
    </b-card>
    <b-modal
      id="add-education-modal"
      title="Add Education"
      cancelTitle="Discard"
      okTitle="Save"
      :ok-disabled="!userEducation.school"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="handleAddNewEducation"
      @hide="resetFormData"
    >
      <CreateOrEditEducation
        v-model="userEducation"
        :handle-submit="handleAddNewEducation"
      />
    </b-modal>
    <b-modal
      id="edit-education-modal"
      title="Edit Education"
      cancelTitle="Discard"
      okTitle="Save"
      :ok-disabled="!userEducation.school"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="handleEditEducation"
      @hide="resetFormData"
    >
      <CreateOrEditEducation
        v-model="userEducation"
        :editEducation="userEducation"
        :handle-submit="handleAddNewEducation"
        :loading="loading"
      />
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue"; //TODO: reduce it
import SectionHeader from "../SectionHeader";
import CreateOrEditEducation from "./CreateOrEditEducation";
import API from "../../../api/Api";
import { mapState } from "vuex";
import {
  BButton,
  BCard,
  BListGroupItem,
  BAvatar,
  ModalPlugin,
} from "bootstrap-vue";
import Spinner from "@/components/Spinner/Spinner";

Vue.use(ModalPlugin);

export default {
  name: "UserEducation",
  data() {
    return {
      educations: [],
      userEducation: {},
      errors: null,
      loading: false,
    };
  },

  components: {
    SectionHeader,
    CreateOrEditEducation,
    BButton,
    BCard,
    BListGroupItem,
    BAvatar,
    Spinner,
  },
  created() {
    this.getUserEducations();
  },
  methods: {
    async getUserEducations() {
      try {
        this.loading = true;
        const userEducations = await API.get("user-educations");
        this.educations = userEducations.data.userEducation;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    async handleAddNewEducation(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
      try {
        this.loading = true;
        let valid =
          this.userEducation.school && this.userEducation.school.trim();
        if (!valid) return;
        const res = await API.post("create-user-education", this.userEducation);
        this.educations.unshift(res.data.education); // add new item in array
        this.loading = false;
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }

      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("add-education-modal");
      });

      this.userEducation = {};
    },

    async handleEditEducation(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing

      try {
        this.loading = true;
        let valid =
          this.userEducation.school && this.userEducation.school.trim();
        if (!valid) return;

        await API.put(
          `user/${this.user.id}/edit-user-education/${this.userEducation.id}`,
          this.userEducation
        );
        // update list
        const index = this.educations.findIndex(
          (i) => i.id === this.userEducation.id
        );
        this.educations.splice(index, 1, this.userEducation);

        this.loading = false;
        this.userEducation = {};
      } catch (error) {
        alert(error);
      }
      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("edit-education-modal");
      });
      this.userEducation = {};
    },

    async handleDeleteUserEducation(education) {
      try {
        this.loading = true;
        await API.delete(
          `user/${this.user.id}/destroy-user-education/${education.id}`
        );
        this.educations.splice(this.educations.indexOf(education), 1); //delete item from list
        this.loading = false;
      } catch (error) {
        alert(error);
      }
    },

    resetFormData() {
      this.education = {};
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
