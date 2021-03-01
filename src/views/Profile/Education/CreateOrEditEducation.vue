<template>
  <spinner :loading="!loaded">
    <b-form @submit.stop.prevent="handleSubmit">
      <b-form-group label-for="school">
        <SearchInstitution v-model="institution" />
      </b-form-group>

      <b-form-group label="Degree" label-for="degree">
        <b-form-input
          id="degree"
          type="text"
          size="sm"
          v-model="degree"
          placeholder="Ex: Bachelor of Science, Computer Science & Engineering"
          @update="($event) => setField($event, 'degree')"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Degree/CGPA" label-for="grade">
        <b-form-input
          id="grade"
          type="text"
          size="sm"
          placeholder="Ex: A- or 3.49"
          v-model="grade"
          @update="($event) => setField($event, 'grade')"
        ></b-form-input>
      </b-form-group>
      <b-form-row>
        <b-col>
          <b-form-group label="Start Year">
            <b-form-select
              id="start_year"
              @change="($event) => setField($event, 'start_year')"
              v-model="start_year"
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
              id="end_year"
              @change="($event) => setField($event, 'end_year')"
              v-model="end_year"
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
} from "bootstrap-vue";
import Spinner from "@/components/Spinner/Spinner";
import SearchInstitution from "./SearchInstitution/SearchInstitution";
export default {
  name: "CreateOrEditEducation",
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormSelectOption,
    BFormRow,
    BCol,
    Spinner,
    SearchInstitution,
  },
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },
    editEducation: {
      type: Object,
      required: false,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      institution: "",
      degree: "",
      grade: "",
      start_year: null,
      end_year: null,
    };
  },
  created() {
    if (this.editEducation) {
      this.institution_id = this.editEducation.institution_id;
      this.degree = this.editEducation.degree;
      this.grade = this.editEducation.grade;
      this.start_year = this.editEducation.start_year;
      this.end_year = this.editEducation.end_year;

      this.emitFormData();
    }
  },
  methods: {
    setField(value, field) {
      if (field === "degree") this.degree = value;
      else if (field === "grade") this.grade = value;
      else if (field === "start_year") this.start_year = value;
      else if (field === "end_year") this.end_year = value;

      this.emitFormData();
    },
    emitFormData() {
      this.$emit("input", {
        institution_id: this.institution.id,
        degree: this.degree,
        grade: this.grade,
        start_year: this.start_year,
        end_year: this.end_year,
      });
    },
  },
  computed: {
    years() {
      const year = new Date().getFullYear() + 10;
      return Array.from(
        { length: year - 2000 },
        (value, index) => 2000 + index
      );
    },
    loaded: function () {
      return !this.loading;
    },
  },
  watch: {
    institution: function () {
      this.emitFormData();
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
