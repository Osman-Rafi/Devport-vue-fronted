<template>
  <div>
    <SectionHeader section-title="Organizations" add-more-route="#">
      <b-button
        class="text-black-50"
        variant="link"
        v-b-modal.addOrganization
        size="sm"
      >
        <font-awesome-icon icon="plus" class="mr-1" />
      </b-button>
    </SectionHeader>
    <b-card>
      <b-list-group-item class="d-flex align-items-center border-0">
        <b-avatar variant="danger" size="5rem" text="T"></b-avatar>
        <div class="fs-0 ml-3">
          <p class="font-weight-600 mb-0 fs-0">Technext Limited</p>
          <p class="mb-0">Software Developer</p>
          <p class="text-black-50 mb-0">2019-2020</p>
        </div>
      </b-list-group-item>
    </b-card>
    <b-modal
      id="addOrganization"
      cancelTitle="Discard"
      okTitle="Update"
      button-size="sm"
      hide-header
      return-focus="false"
    >
      <CreateOrganization />
    </b-modal>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader";
import CreateOrganization from "./CreateOrganization";
import {
  BButton,
  BCard,
  BListGroupItem,
  BAvatar,
  BModal,
  VBModal,
} from "bootstrap-vue";
export default {
  name: "UserOrganization",
  components: {
    CreateOrganization,
    SectionHeader,
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
