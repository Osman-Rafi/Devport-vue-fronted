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
    <b-card>
      <b-list-group-item class="d-flex align-items-center border-0">
        <b-avatar variant="primary" size="5rem" text="M"></b-avatar>
        <div class="fs-0 ml-3">
          <p class="font-weight-600 mb-0 fs-0">
            Metropolitan University Bangladesh
          </p>
          <p class="mb-0">Bachelor of Science</p>
          <p class="text-black-50 mb-0">2015-2019</p>
        </div>
      </b-list-group-item>
    </b-card>
    <b-modal
      id="add-education-modal"
      title="Add Education"
      cancelTitle="Discard"
      okTitle="Save"
      :ok-disabled="!addNewEducation.school"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="handleAddNewEducation"
      @hide="resetFormData"
    >
      <CreateEducation
        v-model="addNewEducation"
        :handle-submit="handleAddNewEducation"
      />
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue"; //TODO: reduce it
import SectionHeader from "../SectionHeader";
import CreateEducation from "./CreateEducation";
import API from "../../../api/Api";
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
      addNewEducation: "",
      errors: null,
    };
  },
  components: {
    SectionHeader,
    CreateEducation,
    BButton,
    BCard,
    BListGroupItem,
    BAvatar,
  },
  methods: {
    async handleAddNewEducation(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
      try {
        await API.post("create-user-education", this.addNewEducation);
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }

      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("add-education-modal");
      });
      this.resetFormData();
    },
    resetFormData() {
      this.addNewEducation = {};
    },
  },
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
