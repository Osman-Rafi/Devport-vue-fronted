<template>
  <div>
    <b-button
      v-b-modal.add-institute
      variant="link"
      class="fs--1 text-decoration-none p-0"
      >Can't find your institute ? Add one</b-button
    >
    <b-modal
      id="add-institute"
      title="Add new institute"
      cancelTitle="Discard"
      okTitle="Save"
      button-size="sm"
      size="lg"
      return-focus="false"
      hide-header-close
      ok-only
    >
      <b-form action="">
        <b-form-group label="Institute Name *" label-for="school">
          <b-form-input
            id="institute-name"
            type="text"
            size="sm"
            required
            v-model="formData.institute_name"
          ></b-form-input>
        </b-form-group>
        <b-form-row>
          <b-col>
            <b-form-group label="Country *">
              <b-form-input
                list="country-list"
                v-model="formData.country"
              ></b-form-input>
              <b-form-datalist id="country-list" :options="filteredCountry">
              </b-form-datalist>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="City *">
              <b-form-input
                list="city-list"
                v-model="formData.city"
              ></b-form-input>
              <b-form-datalist id="city-list" :options="filteredCity">
              </b-form-datalist>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-textarea
          id="description"
          v-model="formData.description"
          placeholder="Say something about the institution"
          size="sm"
          rows="4"
          no-resize
        >
        </b-form-textarea>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BFormRow,
  BCol,
  BFormDatalist,
  BFormTextarea,
} from "bootstrap-vue";
import CountryData from "country-region-data";
export default {
  name: "CreateEducationInstitute",
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BFormRow,
    BCol,
    BFormDatalist,
    BFormTextarea,
  },
  data() {
    return {
      formData: {
        institute_name: "",
        country: "Bangladesh",
        city: "Dhaka",
        logo: "",
        description: "",
      },
      country_data: CountryData,
      country_search: "",
      country_selected: "",
    };
  },
  methods: {},
  computed: {
    filteredCountry: function () {
      return this.country_data
        .filter((country) => {
          return country.countryName.match(this.formData.country);
        })
        .map((country) => {
          this.country_selected = country;
          return country.countryName;
        });
    },

    filteredCity: function () {
      return this.country_selected.regions.map((city) => {
        return city.name;
      });
    },
  },
};
</script>

<style scoped></style>
