<template>
  <spinner :loading="loading">
    <b-form-group>
      <search-organization
        v-model="formData.organization"
        :organization="formData.organization"
      />
    </b-form-group>
    <b-form @submit.stop.prevent="handleSubmit">
      <b-form-group label="Designation" label-for="designation">
        <b-form-input
          id="designation"
          type="text"
          size="sm"
          placeholder="Ex: Junior Software Engineer"
          v-model="formData.designation"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Employment Type">
        <b-form-select v-model="formData.type" :options="employmentTypes">
        </b-form-select>
      </b-form-group>
      <b-form-row>
        <b-col>
          <b-form-group label="Start Year">
            <b-form-select id="startYear" v-model="formData.startYear">
              <b-form-select-option value="null">Year</b-form-select-option>
              <b-form-select-option
                v-for="year in years"
                :value="year"
                :key="year"
                >{{ year }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="End Year (or expected)">
            <div v-if="formData.currentlyWorking === 'true' ? '' : 'd-none'">
              <b-form-select id="lastYear" v-model="formData.endYear">
                <b-form-select-option value="null">Year</b-form-select-option>
                <b-form-select-option
                  v-for="year in years"
                  :value="year"
                  :key="year"
                  >{{ year }}</b-form-select-option
                >
              </b-form-select>
            </div>
            <div v-else>
              <p class="fs--1 ml-1 font-weight-500">Currently working</p>
            </div>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-group>
        <b-form-checkbox
          id="currently_working"
          v-model="formData.currentlyWorking"
          value="true"
          unchecked-value="false"
          ><span class="fs--1">
            I am currently working here
          </span></b-form-checkbox
        >
      </b-form-group>
    </b-form>
  </spinner>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormSelectOption,
  BFormRow,
  BCol,
  BFormCheckbox,
} from "bootstrap-vue";
import Spinner from "@/common/components/Spinner/Spinner";
import SearchOrganization from "./SearchOrganization/SearchOrganization";
export default {
  name: "CreateOrEditExperience",
  components: {
    SearchOrganization,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormSelectOption,
    BFormRow,
    BCol,
    BFormCheckbox,
    Spinner,
  },
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        organization: {},
        designation: "",
        type: null,
        startYear: null,
        endYear: null,
        currentlyWorking: "false",
      },
      employmentTypes: [
        { value: null, text: "-" },
        { value: "full-time", text: "Full Time" },
        { value: "part-time", text: "Part Time" },
        { value: "self-employed", text: "Self Employed" },
        { value: "freelance", text: "Freelance" },
        { value: "internship", text: "Internship" },
        { value: "contract", text: "Contract" },
      ],
      loading: false,
    };
  },
  computed: {
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1990 },
        (value, index) => 1991 + index
      );
    },
  },
  methods: {
    emitFormData() {
      this.$emit("input", this.formData);
    },
  },
  watch:{
    this.
  }
};
</script>

<style lang="scss">
label,
legend {
  font-size: 12px !important;
}
</style>
