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
    <spinner :loading="loading" type="grow">
      <template v-if="educations.length === 0">
        <EmptyField title="Add your educations here with proper details" />
      </template>
      <template v-else>
        <b-card class="d-flex card-shadow">
          <b-list-group-item
            class="d-flex justify-content-between border-0"
            v-for="(education, index) in educations"
            :key="index"
          >
            <div class="d-flex">
              <b-avatar
                variant="primary"
                size="4rem"
                :src="education.education_institution.logo"
              ></b-avatar>
              <div class="fs-0 ml-3">
                <p class="font-weight-600 mb-0 fs-0">
                  {{ education.education_institution.institution_name }}
                </p>
                <p class="mb-0 fs--1 font-weight-600 text-black-70">
                  {{ education.degree }}
                </p>
                <p
                  class="text-black-50 mb-0 text-black-60 fs--1"
                  v-if="education.start_year"
                >
                  Form {{ education.start_year }} to {{ education.end_year }}
                </p>
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
                <hr v-if="index !== educations.length - 1" />
              </div>
            </div>
          </b-list-group-item>
        </b-card>
      </template>
    </spinner>
    <b-modal
      id="add-education-modal"
      title="Add Education"
      cancelTitle="Discard"
      okTitle="Save"
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
      :ok-disabled="!userEducation.institution_id"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="handleEditEducation"
    >
      <CreateOrEditEducation
        v-model="userEducation"
        :editEducation="userEducation"
        :handle-submit="handleAddNewEducation"
        :loading="loading"
      />
    </b-modal>
    <b-modal
      id="delete-education"
      title="Delete Education ?"
      @ok="handleDeleteUserEducation(userEducation)"
      ok-variant="outline-danger"
      cancel-variant="outline-secondary"
      ok-title="Delete"
      button-size="sm"
    >
      <p>This education will be deleted permanently.</p>
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
  BAvatar,
  BButton,
  BCard,
  BListGroupItem,
  BVToastPlugin,
  ModalPlugin,
} from "bootstrap-vue";
import Spinner from "@/components/Spinner/Spinner";
import { notificationToast } from "@/components/NotificationToast";
import EmptyField from "@/components/Cards/EmptyField";

Vue.use(ModalPlugin);
Vue.use(BVToastPlugin);

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
    EmptyField,
  },
  created() {
    this.getUserEducations();
  },
  methods: {
    async getUserEducations() {
      try {
        this.loading = true;
        const userEducations = await API.get(
          `user-educations/user/${this.user.id}`
        );
        this.educations = userEducations.data.userEducation;
        this.loading = false;
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000",
          "top-left"
        );
      }
    },

    async handleAddNewEducation(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
      let education = this.userEducation;
      try {
        this.loading = true;
        const res = await API.post("create-user-education", this.userEducation);
        if (res.status === 200) {
          education = { ...education, id: res.data.education.id };
          this.educations.unshift(education); // add new item in array
        }
        this.loading = false;
        notificationToast(
          this,
          true,
          "Success !!",
          "Education Added",
          "success"
        );
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
        notificationToast(
          this,
          true,
          "Success !!",
          "Education Updated",
          "success"
        );
        this.resetFormData();
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000",
          "top-left"
        );
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
        notificationToast(
          this,
          true,
          "Success !!",
          "Education Deleted",
          "danger"
        );
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000",
          "top-left"
        );
        console.log(error);
      }
      this.resetFormData();
    },

    resetFormData() {
      this.userEducation = {};
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
.no-underline {
  text-decoration: none !important;
}
</style>
