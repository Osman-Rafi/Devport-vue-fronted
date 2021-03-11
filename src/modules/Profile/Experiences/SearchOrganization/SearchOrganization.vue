<template>
  <div>
    <div>
      <b-form-group label="Search your Organization">
        <b-form-input
          id="search"
          size="sm"
          v-model="search"
          @update="fetchOrganizationSuggestions"
        ></b-form-input>
      </b-form-group>
      <b-card class="card-shadow overflow-auto" body-class="px-1 py-3">
        <div
          v-for="suggestion in organizationSuggestions"
          :key="suggestion.id"
          class="mb-3"
        >
          <organization-summary
            v-model="selectedOrganization"
            :institution="suggestion"
            v-on="$listeners"
          />
          <hr />
        </div>
        <div>
          <create-organization />
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { BFormGroup, BFormInput, BCard } from "bootstrap-vue";
import OrganizationSummary from "./OrganizationSummary";
import CreateOrganization from "../CreateOrganization";
export default {
  name: "SearchOrganization",
  components: {
    OrganizationSummary,
    CreateOrganization,
    BFormInput,
    BFormGroup,
    BCard,
  },
  data() {
    return {
      search: "",
      selectedOrganization: {},
      organizationSuggestions: [],
    };
  },
  methods: {
    fetchOrganizationSuggestions() {
      console.log("suggestions");
    },
  },
};
</script>

<style scoped></style>
