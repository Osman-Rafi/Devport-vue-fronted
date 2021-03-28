<template>
  <div>
    <b-modal
      id="edit-experience-modal"
      title="Edit Experience"
      cancelTitle="Discard"
      okTitle="Save"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="updateFormData"
    >
      <spinner :loading="loading">
        <user-experience-fields :user-experience="userExperience" />
      </spinner>
    </b-modal>
  </div>
</template>

<script>
import { VBModal, BModal } from "bootstrap-vue";
import UserExperienceFields from "@/modules/Profile/Experiences/UserExperienceFields";
import Spinner from "@/common/components/Spinner/Spinner";

export default {
  name: "EditUserExperience",
  components: {
    Spinner,
    UserExperienceFields,
    BModal,
  },
  props: {
    experience: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  directives: {
    "b-modal": VBModal,
  },
  computed: {
    userExperience() {
      return { ...this.experience };
    },
  },
  methods: {
    updateFormData() {
      this.$emit("updateExperience", this.userExperience);
    },
  },
};
</script>

<style scoped></style>
