<template>
  <div>
    <b-button
      v-b-modal.add-organization
      variant="link"
      class="fs--1 text-left p-0 text-decoration-none text-black-70"
    >
      <can-not-find-organization />
    </b-button>
    <b-modal
      id="add-organization"
      title="Add Organization"
      cancelTitle="Discard"
      okTitle="Save"
      button-size="sm"
      return-focus="false"
      hide-header-close
      @ok="handleCreateNewOrganization"
      :ok-disabled="!formData.name"
    >
      <spinner :loading="loading" spinnerType="grow">
        <b-form>
          <FileUploader
            v-model="logo"
            label="Drop institution logo here..."
            file-name="logo"
          />
          <b-form-group label="Organization Name *" label-for="organization">
            <b-form-input
              id="organization-name"
              type="text"
              size="sm"
              required
              v-model="formData.name"
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
          <b-form-group label="Organization Website" label-for="website">
            <b-form-input
              id="website"
              type="url"
              size="sm"
              required
              v-model="formData.website"
            ></b-form-input>
          </b-form-group>
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
import CanNotFindOrganization from "./SearchOrganization/CanNotFindOrganization";
import FileUploader from "@/common/components/FileUploader/FileUploader";
import Spinner from "@/common/components/Spinner/Spinner";
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormRow,
  BCol,
  BFormDatalist,
  BFormTextarea,
} from "bootstrap-vue";
import CountryData from "country-region-data";
import { notificationToast } from "@/common/components/NotificationToast";
import API from "@/api/Api";
export default {
  name: "CreateOrganization",
  components: {
    CanNotFindOrganization,
    FileUploader,
    Spinner,
    BForm,
    BFormGroup,
    BFormInput,
    BFormRow,
    BCol,
    BFormDatalist,
    BFormTextarea,
  },
  data() {
    return {
      formData: {
        name: "",
        country: "",
        city: "",
        website: "",
        description: "",
        logoUrl: "",
      },
      logo: {},
      loading: false,
      country_data: CountryData,
      country_selected: "",
    };
  },
  methods: {
    async handleUploadOrganizationLogo() {
      try {
        const res = await API.post("create-organization-logo", this.logo);
        return res.data.path;
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
    async handleCreateNewOrganization(bvModalEvt) {
      bvModalEvt.preventDefault(); //prevent modal closing
      try {
        this.loading = true;
        const logoPath = await this.handleUploadOrganizationLogo();
        this.formData.logoUrl = logoPath;
        const res = await API.post("create-organization", this.formData);
        notificationToast(
          this,
          true,
          "Success !!",
          res.data.message,
          "success"
        );
        this.resetFormData();
        this.loading = false;
      } catch (error) {
        notificationToast(this, true, "Success !!", "success");
      }
      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("add-organization");
      });
    },
    resetFormData() {
      this.formData = {
        institution_name: "",
        country: "Bangladesh",
        city: "Dhaka",
        description: "",
        logoUrl: "",
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
