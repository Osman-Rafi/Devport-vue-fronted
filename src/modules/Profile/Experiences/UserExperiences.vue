<template>
  <div>
    <section-header section-title="Organizations" add-more-route="#">
      <create-user-experience @onCreateExperience="onCreateExperience" />
    </section-header>
    <spinner :loading="loading">
      <template v-if="userExperiences.length === 0">
        <empty-field title="Add your Experiences here with proper details" />
      </template>
      <template v-else>
        <b-card class="d-flex card-shadow">
          <b-list-group-item
            class="d-flex justify-content-between border-0 pl-0"
            v-for="(userExperience, index) in userExperiences"
            :key="index"
          >
            <summary-container
              :class="
                index === userExperiences.length - 1 ? '' : 'border-bottom-pro'
              "
              :logo="userExperience.organization.logo"
              :title="userExperience.organization.name"
              :subtitle="userExperience.organization.description"
            >
              <template v-slot:additional-info>
                <div class="d-flex">
                  <p
                    v-if="userExperience.designation"
                    class="mb-0 fs--1 font-weight-600"
                  >
                    {{ userExperience.designation }}
                  </p>
                  <p
                    v-if="
                      userExperience.designation &&
                      userExperience.employmentType
                    "
                    class="mx-1 mb-0"
                  >
                    ·
                  </p>
                  <p
                    v-if="userExperience.employmentType"
                    class="ml-1 mb-0 fs--1 font-weight-600"
                  >
                    {{ userExperience.employmentType }}
                  </p>
                </div>
                <div class="d-flex fs--1 text-black-60">
                  <template v-if="userExperience.startYear">
                    <p class="mb-0">
                      {{ userExperience.startYear }} to
                      <template v-if="userExperience.currentlyWorking">
                        Present
                      </template>
                      <template v-else>
                        {{ userExperience.endYear }}
                      </template>
                    </p>
                  </template>
                  <p
                    v-if="
                      userExperience.endYear || userExperience.currentlyWorking
                    "
                    class="mx-2 mb-0"
                  >
                    ·
                  </p>
                  <p class="mb-0">
                    <template v-if="userExperience.organization.country">
                      {{ userExperience.organization.country }},
                    </template>
                    <template v-if="userExperience.organization.city">{{
                      userExperience.organization.city
                    }}</template>
                  </p>
                </div>
              </template>
              <template v-slot:action-buttons>
                <div class="d-flex mt-1">
                  <b-button
                    variant="link"
                    class="p-0 my-0 ml-0 no-underline fs--1 mr-3 text-blue font-weight-600"
                    @click="triggerEdit(index)"
                    >Edit or add details</b-button
                  >
                  <b-button
                    variant="link"
                    class="p-0 m-0 no-underline fs--1 text-blue font-weight-600"
                    @click="triggerDelete(index)"
                    >Remove</b-button
                  >
                </div>
              </template>
            </summary-container>
          </b-list-group-item>
        </b-card>
      </template>

      <edit-user-experience
        :experience="editExperience"
        :loading="loading"
        @updateExperience="handleEditExperience"
      />

      <template v-if="enableDelete">
        <delete-user-experience
          :experience="deleteExperience"
          @onDeleteExperience="onDeleteExperience"
        />
      </template>
    </spinner>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader";
import Spinner from "@/common/components/Spinner/Spinner";
import SummaryContainer from "../../../common/components/SummaryContainer";
import EmptyField from "@/common/components/Cards/EmptyField";
import { BCard, BListGroupItem, BButton } from "bootstrap-vue";
import { mapState } from "vuex";
import API from "@/api/Api";
import { notificationToast } from "@/common/components/NotificationToast";

export default {
  name: "UserExperiences",
  components: {
    SectionHeader,
    CreateUserExperience: () => import("./CreateUserExperience"),
    EditUserExperience: () => import("./EditUserExperience"),
    DeleteUserExperience: () => import("./DeleteUserExperience"),
    Spinner,
    EmptyField,
    BCard,
    BListGroupItem,
    SummaryContainer,
    BButton,
  },

  data() {
    return {
      userExperiences: [],
      editExperience: {},
      deleteExperience: {},
      loading: false,
      enableEdit: false,
      enableDelete: false,
      index: 0,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  created() {
    this.fetchUserExperiences();
  },
  methods: {
    async fetchUserExperiences() {
      this.loading = true;
      try {
        const res = await API.get(
          `experience/user-experiences/user/${this.user.id}`
        );
        this.userExperiences = res.data.userExperiences;
        this.loading = false;
      } catch (error) {
        notificationToast(
          this,
          true,
          "Opps!",
          "Something went wrong",
          "danger",
          "5000"
        );
        this.loading = false;
      }
    },

    resetFormData() {
      this.selectedExperience = {};
    },

    onCreateExperience(experience) {
      this.userExperiences.unshift(experience);
    },

    triggerEdit(index) {
      this.enableEdit = true;
      this.editExperience = this.userExperiences[index];
      this.$bvModal.show("edit-experience-modal");
    },

    handleEditExperience(experience) {
      this.loading = true;
      try {
        const userExperience = {
          ...experience,
          organizationId: experience.organization.id,
        };
        API.put(
          `experience/update-user-experience/user/${this.user.id}/experience/${experience.id}`,
          userExperience
        )
          .then((res) => res.data.message)
          .then((res) =>
            notificationToast(this, true, "Success !!", res, "success")
          )
          .then(() => this.userExperiences.splice(this.index, 1, experience));
      } catch (error) {
        notificationToast(
          this,
          true,
          "Oppss !!",
          "Something went wrong to upload logo",
          "danger"
        );
      }
      this.loading = false;
    },

    triggerDelete(index) {
      this.enableDelete = true;
      this.deleteExperience = this.userExperiences[index];
      setTimeout(() => this.$bvModal.show("delete-experience-modal"), 50);
    },

    onDeleteExperience() {
      this.userExperiences.splice(
        this.userExperiences.findIndex(
          (i) => i.id === this.deleteExperience.id
        ),
        1
      );
    },
  },
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
