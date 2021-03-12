<template>
  <div>
    <b-button
      class="text-black-50"
      variant="link"
      v-b-modal.add-experience-modal
      size="sm"
    >
      <font-awesome-icon icon="plus" class="mr-1" />
    </b-button>
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
      <create-or-edit-experience
        v-model="userExperience"
        :handle-submit="handleAddNewExperience"
      />
    </b-modal>
  </div>
</template>

<script>
import CreateOrEditExperience from "./CreateOrEditExperience";
import { BButton, VBModal, BModal } from "bootstrap-vue";
export default {
  name: "CreateUserExperience",
  components: {
    CreateOrEditExperience,
    BButton,
    BModal,
  },
  directives: {
    "b-modal": VBModal,
  },
  data() {
    return {
      userExperience: {},
    };
  },
  methods: {
    handleAddNewExperience() {},
    resetFormData() {},
  },
};
</script>

<style scoped></style>
