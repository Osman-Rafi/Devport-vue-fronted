<template>
  <b-list-group
    flush
    @click="
      selectInstitution(
        institution.id,
        institution.institution_name,
        institution.logo
      )
    "
  >
    <b-list-group-item class="d-flex p-0 mb-3 list-option">
      <div class="pl-2">
        <b-avatar
          variant="primary"
          size="3rem"
          :src="institution.logo || defaultLogo"
        ></b-avatar>
      </div>
      <div class="pl-3">
        <p class="fs--1 mb-0 font-weight-500">
          {{ institution.institution_name }}
        </p>
        <p class="mb-0 fs--2" v-if="institution.description">
          {{ institution.description.substring(0, 150) + "..." }}
        </p>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem, BAvatar } from "bootstrap-vue";
import defaultLogo from "@/assets/img/placeholder/institution.jpg";
export default {
  name: "InstitutionSummary",
  components: {
    BListGroup,
    BListGroupItem,
    BAvatar,
  },
  props: {
    institution: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultLogo,
      selectedInstitution: {},
    };
  },
  methods: {
    selectInstitution(id, institution_name, logo) {
      this.selectedInstitution = {
        id: id,
        institution_name: institution_name,
        logo: logo,
      };
      this.$emit("input", this.selectedInstitution);
    },
  },
};
</script>

<style scoped></style>
