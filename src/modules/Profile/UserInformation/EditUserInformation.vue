<template>
  <b-row>
    <b-col md="10">
      <spinner :loading="loading">
        <b-form @submit.prevent="handleEditUserData">
          <div class="d-flex justify-content-between">
            <div>
              <h1 class="fs-3 font-weight-700">Settings & Account</h1>
              <p class="fs--1">Change your details and account settings</p>
            </div>
            <router-link to="/profile" class="text-black-70">
              <font-awesome-icon icon="arrow-left" class="fs-2" />
            </router-link>
          </div>
          <section-header section-title="Profile Picture" />
          <b-row class="d-flex justify-content-center">
            <b-col sm="6">
              <FileUploader
                v-model="profilePicture"
                label="Drop profile picture here..."
                file-name="profilePicture"
              />
            </b-col>
          </b-row>
          <section-header section-title="Basic Info" />
          <b-form-row>
            <b-col>
              <b-form-group label="First Name">
                <b-form-input
                  id="first-name"
                  type="text"
                  placeholder="Ex: Jhon"
                  required
                  v-model="formData.firstName"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Last Name">
                <b-form-input
                  id="last-name"
                  type="text"
                  placeholder="Ex: Doe"
                  required
                  v-model="formData.sureName"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row>
            <b-col>
              <b-form-group label="Email">
                <b-form-input
                  id="email"
                  type="email"
                  placeholder="Email"
                  disabled
                  v-model="formData.email"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Mobile">
                <b-form-input
                  id="mobile"
                  type="text"
                  placeholder="Ex: 01741******"
                  v-model="formData.mobile"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-group label="Current Address">
            <b-form-input
              id="current-address"
              type="text"
              v-model="formData.currentAddress"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Bio">
            <b-form-textarea></b-form-textarea>
          </b-form-group>
          <section-header section-title="Links & Profiles" />
          <b-form-row>
            <b-col>
              <b-form-group label="Linkedin">
                <b-form-input
                  id="linkedin"
                  type="url"
                  v-model="formData.linkedin"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Github">
                <b-form-input
                  id="github"
                  type="url"
                  v-model="formData.github"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row>
            <b-col>
              <b-form-group label="Facebook">
                <b-form-input
                  id="facebook"
                  type="url"
                  v-model="formData.facebook"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Website">
                <b-form-input
                  id="website"
                  type="url"
                  v-model="formData.website"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
          <section-header section-title="Others" />
          <b-form-row>
            <b-col>
              <b-form-group label="Blood Group">
                <b-form-input
                  id="blood-group"
                  type="text"
                  v-model="formData.bloodGroup"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Gender">
                <b-form-select
                  :options="[
                    { value: 'null', text: 'Please choose you gender' },
                    { value: 'Male', text: 'Male' },
                    { value: 'Female', text: 'Female' },
                    { value: 'Other', text: 'Other' },
                  ]"
                  v-model="formData.gender"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <div class="my-4">
            <b-button type="submit" variant="outline-primary">Submit</b-button>
          </div>
        </b-form>
      </spinner>
    </b-col>
  </b-row>
</template>

<script>
import SectionHeader from "../SectionHeader";
import {
  BFormRow,
  BCol,
  BFormInput,
  BFormGroup,
  BFormSelect,
  BFormTextarea,
  BForm,
  BButton,
  BRow,
} from "bootstrap-vue";
import FileUploader from "@/common/components/FileUploader/FileUploader";
import API from "@/api/Api";
import { mapState } from "vuex";
import { notificationToast } from "@/common/components/NotificationToast";
import Spinner from "@/common/components/Spinner/Spinner";
export default {
  name: "EditUserInformation",
  components: {
    Spinner,
    SectionHeader,
    BFormRow,
    BCol,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BFormTextarea,
    BForm,
    BButton,
    FileUploader,
    BRow,
  },
  data() {
    return {
      formData: {
        profilePicture: "",
        firstName: "",
        sureName: "",
        email: "",
        password: "",
        mobile: "",
        currentAddress: "",
        bio: "",
        linkedin: "",
        github: "",
        facebook: "",
        website: "",
        bloodGroup: "",
        gender: "",
      },
      profilePicture: null,
      loading: false,
    };
  },
  methods: {
    async fetchUserData() {
      this.loading = true;
      try {
        const res = await API.get(`get-user-info/user/${this.user.id}`);
        this.formData = res.data[0].user;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000"
        );
      }
    },

    async handleUploadProfilePicture() {
      try {
        const res = await API.post(
          `update-profile-picture/user/${this.user.id}`,
          this.profilePicture
        );
        return res.data.path;
      } catch (error) {
        console.log(error);
        notificationToast(
          this,
          true,
          "Oppss !!",
          "Something went wrong to update profile picture",
          "danger"
        );
      }
    },
    async handleEditUserData() {
      this.loading = true;
      try {
        this.formData.profilePicture = await this.handleUploadProfilePicture();
        const res = await API.put(
          `update-user-info/user/${this.user.id}`,
          this.formData
        );
        const message = await res.data.message;
        notificationToast(this, true, "success", message, "success", "5000");
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000"
        );
      }
      this.loading = false;
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  created() {
    this.fetchUserData();
  },
};
</script>
