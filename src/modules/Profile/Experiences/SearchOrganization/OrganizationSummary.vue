<template>
  <b-list-group
    flush
    @click="
      selectOrganization(
        organization.id,
        organization.name,
        organization.logo,
        organization.description
      )
    "
  >
    <b-list-group-item
      class="d-flex justify-content-between align-items-center py-0 px-2 mb-3 list-option"
    >
      <div class="d-flex">
        <div class="pl-2">
          <b-avatar
            variant="primary"
            size="3rem"
            :src="organization.logo || defaultLogo"
          ></b-avatar>
        </div>
        <div class="pl-3">
          <p class="fs-0 mb-0 font-weight-500">
            {{ organization.name }}
          </p>
          <p class="mb-0 fs--2" v-if="organization.description">
            {{ organization.description.substring(0, 150) + "..." }}
          </p>
        </div>
      </div>
      <div class="text-black-50">
        <font-awesome-icon icon="chevron-right" class="ml-2" />
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem, BAvatar } from "bootstrap-vue";
import defaultLogo from "@/assets/img/placeholder/organization.png";
export default {
  name: "OrganizationSummary",
  components: {
    BListGroup,
    BListGroupItem,
    BAvatar,
  },
  props: {
    organization: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedOrganization: {},
      defaultLogo,
    };
  },
  methods: {
    selectOrganization(id, organizationName, logo, description) {
      this.selectedOrganization = {
        id: id,
        name: organizationName,
        logo: logo,
        description: description,
      };
      this.$emit("input", this.selectedOrganization);
    },
  },
};
</script>

<style scoped></style>
