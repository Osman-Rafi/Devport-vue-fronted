<template>
  <b-form @submit.stop.prevent="handleSubmit">
    <b-form-group label="School *" label-for="school">
      <b-form-input
        id="school"
        type="text"
        size="sm"
        required
        @update="($event) => setField($event, 'school')"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Degree" label-for="degree">
      <b-form-input
        id="degree"
        type="text"
        size="sm"
        placeholder="Ex: Bachelor"
        @update="($event) => setField($event, 'degree')"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Degree/CGPA" label-for="grade">
      <b-form-input
        id="grade"
        type="text"
        size="sm"
        placeholder="Ex: A- or 3.49"
        @update="($event) => setField($event, 'grade')"
      ></b-form-input>
    </b-form-group>
    <b-form-row>
      <b-col>
        <b-form-group label="Start Year">
          <b-form-select
            id="startYear"
            @change="($event) => setField($event, 'startYear')"
            v-model="startYear"
          >
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
          <b-form-select
            id="lastYear"
            @change="($event) => setField($event, 'lastYear')"
            v-model="lastYear"
          >
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
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      school: "",
      degree: "",
      grade: "",
      startYear: null,
      lastYear: null,
    };
  },
  methods: {
    setField(value, field) {
      if (field === "school") this.school = value;
      else if (field === "degree") this.degree = value;
      else if (field === "grade") this.grade = value;
      else if (field === "startYear") this.startYear = value;
      else if (field === "lastYear") this.lastYear = value;

      this.$emit("input", {
        school: this.school,
        degree: this.degree,
        grade: this.grade,
        startYear: this.startYear,
        lastYear: this.lastYear,
      });
    },
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
