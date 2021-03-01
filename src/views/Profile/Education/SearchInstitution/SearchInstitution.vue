<template>
  <div>
    <div :class="selectedInstitution === null ? '' : 'd-none'">
      <b-form-group label="Search your School">
        <b-form-input
          id="search"
          label="Search you institution"
          size="sm"
          v-model="search"
          @update="getEducationInstitutionsSuggestions"
        ></b-form-input>
      </b-form-group>
      <b-card
        class="card-shadow overflow-auto"
        :class="institution_suggestions === null ? 'd-none' : ''"
        body-class="px-1 py-3"
      >
        <div
          v-for="suggestion in institution_suggestions"
          :key="suggestion.id"
          class="mb-3"
          :class="institution_suggestions === null ? 'd-none' : ''"
        >
          <SearchListItem
            v-model="selectedInstitution"
            :institution="suggestion"
            v-on="$listeners"
          />
          <hr />
        </div>
        <div>
          <create-education-institution />
        </div>
      </b-card>
    </div>
    <template v-if="selectedInstitution">
      <div :class="selectedInstitution === null ? 'd-none' : ''">
        <b-list-group-item class="d-flex justify-content-between">
          <div class="d-flex">
            <div class="pl-2">
              <b-avatar
                variant="primary"
                size="4rem"
                :src="selectedInstitution.logo || defaultLogo"
              ></b-avatar>
            </div>
            <div class="pl-3">
              <p class="fs-0 mb-0 font-weight-500">
                {{ selectedInstitution.institution_name }}
              </p>
            </div>
          </div>
          <b-button variant="link" @click.prevent="clearSelectedInstitution">
            <font-awesome-icon icon="times" class="text-black-70" />
          </b-button>
        </b-list-group-item>
      </div>
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
import SearchListItem from "./SearchListItem";
import API from "@/api/Api";
import CreateEducationInstitution from "../CreateEducationInstitution";
import defaultLogo from "@/assets/img/placeholder/institution.jpg";
export default {
  name: "SearchInstitution",
  components: {
    BFormGroup,
    BFormInput,
    BCard,
    SearchListItem,
    BListGroupItem,
    BAvatar,
    CreateEducationInstitution,
    BButton,
  },
  data() {
    return {
      defaultLogo,
      search: "",
      institution_suggestions: null,
      selectedInstitution: null,
    };
  },
  methods: {
    async getEducationInstitutionsSuggestions() {
      let count = 0;
      let search_results = {};
      if (this.search.length > 2) {
        const res = await API.post("search-education-institution", {
          search: this.search,
        });
        count = res.data.count;
        search_results = res.data.institutions;
      }
      count > 0
        ? (this.institution_suggestions = search_results)
        : (this.institution_suggestions = {});
    },
    clearSelectedInstitution() {
      this.selectedInstitution = null;
    },
  },
  computed: {
    emitInstitutionId() {
      return this.$emit("input", this.selectedInstitution);
    },
  },
};
</script>

<style scoped lang="scss">
.overflow-auto {
  max-height: 260px;
}
</style>
