<template>
  <div>
    <SectionHeader section-title="Educations" add-more-route="#">
      <b-button
        class="text-black-50"
        variant="link"
        v-b-modal.add-education
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
      id="add-education"
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
import SectionHeader from "../SectionHeader";
import CreateEducation from "./CreateEducation";
import { API } from "../../../api/Api";
import {
  BButton,
  BCard,
  BListGroupItem,
  BAvatar,
  BModal,
  VBModal,
} from "bootstrap-vue";
export default {
  name: "UserEducation",
  data() {
    return {
      addNewEducation: "",
    };
  },
  components: {
    SectionHeader,
    CreateEducation,
    BButton,
    BCard,
    BListGroupItem,
    BAvatar,
    BModal,
  },
  directives: {
    "b-modal": VBModal,
  },
  methods: {
    async handleAddNewEducation(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
      await API.post(
        `create-user-education`,
        this.addNewEducation
      ).then((res) => console.log(res));

      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("add-eduction");
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
