<template>
  <div>
    <SectionHeader section-title="Educations" add-more-route="#">
      <b-button
        class="text-black-50"
        variant="link"
        v-b-modal.addEducation
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
      id="addEducation"
      cancelTitle="Discard"
      okTitle="Update"
      button-size="sm"
      hide-header
      return-focus="false"
    >
      <CreateEducation />
    </b-modal>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader";
import CreateEducation from "./CreateEducation";
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
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
