<template>
  <div>
    <template v-if="isSelectedOrganizationEmpty">
      <b-form-group label="Search your Organization">
        <b-form-input
          id="search"
          size="sm"
          v-model="search"
          placeholder="Google, Facebook, Github..."
          @update="fetchOrganizationSuggestions"
        ></b-form-input>
      </b-form-group>
      <template>
        <b-card class="card-shadow overflow-auto" body-class="px-1 py-3">
          <div
            v-for="suggestion in organizationSuggestions"
            :key="suggestion.id"
            class="mb-3"
          >
            <organization-summary
              v-model="selectedOrganization"
              :organization="suggestion"
              v-on="$listeners"
            />
            <hr />
          </div>
          <div>
            <create-organization />
          </div>
        </b-card>
      </template>
    </template>
    <template v-if="!isSelectedOrganizationEmpty">
      <b-list-group-item class="d-flex justify-content-between">
        <div class="d-flex">
          <div class="pl-2">
            <b-avatar
              variant="primary"
              size="4rem"
              :src="selectedOrganization.logo"
            ></b-avatar>
          </div>
          <div class="pl-3 d-flex align-items-lg-center">
            <p class="fs-1 mb-0 font-weight-500">
              {{ selectedOrganization.name }}
            </p>
          </div>
        </div>
        <b-button variant="link" @click.prevent="clearSelectedOrganization">
          <font-awesome-icon icon="times" class="text-black-70" />
        </b-button>
      </b-list-group-item>
    </template>
  </div>
</template>

<script>
import {
  BFormGroup,
  BFormInput,
  BCard,
  BListGroupItem,
  BAvatar,
  BButton,
} from "bootstrap-vue";
import OrganizationSummary from "./OrganizationSummary";
import CreateOrganization from "../CreateOrganization";
import API from "@/api/Api";
import _isEmpty from "lodash/isEmpty";
export default {
  name: "SearchOrganization",
  components: {
    OrganizationSummary,
    CreateOrganization,
    BFormInput,
    BFormGroup,
    BCard,
    BListGroupItem,
    BAvatar,
    BButton,
  },
  props: {
    organization: {
      required: true,
    },
  },
  data() {
    return {
      search: "",
      selectedOrganization: this.organization,
      organizationSuggestions: null,
    };
  },
  methods: {
    async fetchOrganizationSuggestions() {
      let count = 0;
      let searchResults = {};

      if (this.search.length > 2) {
        const res = await API.post("search-organizations", {
          search: this.search,
        });
        count = res.data.count;
        searchResults = res.data.organizations;
      }
      count > 0
        ? (this.organizationSuggestions = searchResults)
        : (this.organizationSuggestions = {});
    },
    clearSelectedOrganization() {
      this.selectedOrganization = null;
    },
  },
  computed: {
    isOrganizationSuggestionsEmpty() {
      return _isEmpty(this.organizationSuggestions);
    },
    isSelectedOrganizationEmpty() {
      return _isEmpty(this.selectedOrganization);
    },
  },
};
</script>

<style scoped></style>
