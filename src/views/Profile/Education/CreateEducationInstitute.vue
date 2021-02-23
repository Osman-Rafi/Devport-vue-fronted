<template>
  <div>
    <b-button
      v-b-modal.add-institution
      variant="link"
      class="fs--1 text-decoration-none p-0"
      >Can't find your institute ? Add one</b-button
    >
    <b-modal
      id="add-institution"
      title="Add new institute"
      cancelTitle="Discard"
      okTitle="Save"
      button-size="sm"
      size="lg"
      return-focus="false"
      hide-header-close
      @ok="handleCreateNewInstitution"
    >
      <spinner :loading="loading" spinnerType="grow">
        <b-form action="">
          <FileUploader
            v-model="logo"
            label="Drop institution logo here..."
            file-name="logo"
          />
          <b-form-group label="Institute Name *" label-for="school">
            <b-form-input
              id="institute-name"
              type="text"
              size="sm"
              required
              v-model="formData.institution_name"
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
      </spinner>
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
import FileUploader from "@/components/FileUploader/FileUploader";
import API from "@/api/Api";
import { notificationToast } from "@/components/NotificationToast";
import Spinner from "@/components/Spinner/Spinner";
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
    FileUploader,
    Spinner,
  },
  data() {
    return {
      formData: {
        institution_name: "",
        country: "Bangladesh",
        city: "Dhaka",
        description: "",
        logo_url: "",
      },
      logo: {},
      country_data: CountryData,
      country_search: "",
      country_selected: "",
      loading: false,
    };
  },
  methods: {
    async handleUploadInstitutionLogo() {
      try {
        const res = await API.post(
          "create-education-institute-logo",
          this.logo
        );
        this.formData.logo_url = res.data.path;
      } catch (error) {
        notificationToast(
          this,
          true,
          "Oppss !!",
          "Something went wrong to upload logo",
          "danger"
        );
      }
    },
    async handleCreateNewInstitution(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
      try {
        this.loading = true;
        await this.handleUploadInstitutionLogo();
        const res = await API.post("create-education-institute", this.formData);
        notificationToast(this, true, "Oppss !!", res.data.message, "success");
        this.resetFormData();
        this.loading = false;
      } catch (error) {
        notificationToast(
          this,
          true,
          "Oppss !!",
          "Something went wrong",
          "danger"
        );
      }
      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("add-institution");
      });
    },
    resetFormData() {
      this.formData = {
        institution_name: "",
        country: "Bangladesh",
        city: "Dhaka",
        description: "",
        logo_url: "",
      };
      this.logo = {};
    },
  },
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
