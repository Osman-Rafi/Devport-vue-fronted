<template>
  <b-form>
    <b-form-group label="School" label-for="school">
      <b-form-input
        id="school"
        type="text"
        size="sm"
        v-model="formData.school"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Degree" label-for="degree">
      <b-form-input
        id="degree"
        type="text"
        size="sm"
        placeholder="Ex: Bachelor"
        v-model="formData.degree"
      ></b-form-input>
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
          <b-form-select id="lastYear" v-model="formData.lastYear">
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
    </b-form-row>
  </b-form>
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
} from "bootstrap-vue";
export default {
  name: "CreateEducation",
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormSelectOption,
    BFormRow,
    BCol,
  },
  data() {
    return {
      formData: {
        school: "",
        degree: "",
        startYear: null,
        lastYear: null,
      },
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
};
</script>

<style lang="scss">
label,
legend {
  font-size: 12px !important;
}
</style>
