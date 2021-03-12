<template>
  <div>
    <SectionHeader section-title="Organizations" add-more-route="#">
      <create-user-experience />
    </SectionHeader>
    <spinner :loading="loading">
      <template v-if="experiences.length === 0">
        <EmptyField title="Add your Experiences here with proper details" />
      </template>
      <template v-else> </template>
    </spinner>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader";
import Spinner from "@/common/components/Spinner/Spinner";
import EmptyField from "@/common/components/Cards/EmptyField";
export default {
  name: "UserExperiences",
  components: {
    SectionHeader,
    CreateUserExperience: () => import("./CreateUserExperience"),
    Spinner,
    EmptyField,
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
