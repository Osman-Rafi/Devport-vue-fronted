<template>
  <div>
    <b-form-group>
      <search-organization
        v-model="formData.organization"
        :organization="formData.organization"
      />
    </b-form-group>
    <b-form>
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
        <b-form-select
          v-model="formData.employmentType"
          :options="employmentTypes"
        >
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
            <template v-if="formData.currentlyWorking">
              <p class="fs--1 ml-1 font-weight-500">Currently working</p>
            </template>
            <template v-else>
              <b-form-select id="lastYear" v-model="formData.endYear">
                <b-form-select-option value="null">Year</b-form-select-option>
                <b-form-select-option
                  v-for="year in years"
                  :value="year"
                  :key="year"
                  >{{ year }}</b-form-select-option
                >
              </b-form-select>
            </template>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-group>
        <b-form-checkbox
          id="currently_working"
          v-model="formData.currentlyWorking"
          :value="1"
          :unchecked-value="0"
          ><span class="fs--1">
            I am currently working here
          </span></b-form-checkbox
        >
      </b-form-group>
    </b-form>
  </div>
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
import SearchOrganization from "./SearchOrganization/SearchOrganization";
export default {
  name: "UserExperienceFields",
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
  },
  props: {
    userExperience: {
      type: Object,
      default: function () {
        return {
          organization: {},
          designation: "",
          employmentType: null,
          startYear: null,
          endYear: null,
          currentlyWorking: false,
        };
      },
      required: false,
    },
    userData: Object,
  },
  data() {
    return {
      employmentTypes: [
        { value: null, text: "-" },
        { value: "Full time", text: "Full Time" },
        { value: "Part time", text: "Part Time" },
        { value: "Self employed", text: "Self Employed" },
        { value: "Freelance", text: "Freelance" },
        { value: "Internship", text: "Internship" },
        { value: "Contract", text: "Contract" },
      ],
    };
  },
  computed: {
    formData() {
      return this.userExperience;
    },
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1990 },
        (value, index) => 1991 + index
      );
    },
  },
  /*watch: {
    formData: {
      immediate: true,
      handler: function (value) {
        this.$emit("userExperience", value);
      },
      deep: true,
    },
  },*/
};
</script>

<style lang="scss">
label,
legend {
  font-size: 12px !important;
}
</style>
