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
          >
            <font-awesome-icon icon="pencil-alt" class="mr-1" />
          </b-button>
          <b-button
            class="text-black-50"
            variant="link"
            size="sm"
            @click="handleDeleteUserEducation(education.id, education.user_id)"
          >
            <span class="text-danger">
              <font-awesome-icon :icon="['far', 'trash-alt']" class="mr-1" />
            </span>
          </b-button>
        </div>
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
            :editEducation="education"
            :handle-submit="handleAddNewEducation"
          />
        </b-modal>
      </b-list-group-item>
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

Vue.use(ModalPlugin);

export default {
  name: "UserEducation",
  data() {
    return {
      educations: [],
      userEducation: "",
      errors: null,
    };
  },
  components: {
    SectionHeader,
    CreateOrEditEducation,
    BButton,
    BCard,
    BListGroupItem,
    BAvatar,
  },
  created() {
    this.getUserEducations();
  },
  methods: {
    async getUserEducations() {
      try {
        const userEducations = await API.get("user-educations");
        this.educations = userEducations.data.userEducation;
      } catch (error) {
        console.log(error);
      }
    },

    async handleAddNewEducation(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
      try {
        await API.post("create-user-education", this.userEducation);
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }

      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("add-education-modal");
      });
      this.userEducation = "";
    },

    async handleEditEducation(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing

      try {
        await API.put(
          `user/${this.user.id}/edit-user-education/${this.userEducation.id}`,
          this.userEducation
        );
      } catch (error) {
        alert(error);
      }
      this.userEducation = "";
    },

    async handleDeleteUserEducation(id) {
      try {
        await API.delete(`user/${this.user.id}/destroy-user-education/${id}`);
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
