<template>
  <div>
    <b-button
      class="text-black-50"
      variant="link"
      v-b-modal.add-experience-modal
      size="sm"
    >
      <font-awesome-icon icon="plus" class="mr-1" />
    </b-button>
    <b-modal
      id="add-experience-modal"
      title="Add Experience"
      cancelTitle="Discard"
      okTitle="Save"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="handleAddNewExperience"
      @hide="resetFormData"
      :ok-disabled="isUserExperienceEmpty"
    >
      <user-experience-fields
        :user-experience="userExperience"
        :handle-submit="handleAddNewExperience"
        :loading="loading"
      />
    </b-modal>
  </div>
</template>

<script>
import UserExperienceFields from "./UserExperienceFields";
import { BButton, VBModal, BModal } from "bootstrap-vue";
import { mapState } from "vuex";
import API from "@/api/Api";
import { notificationToast } from "@/common/components/NotificationToast";
import _isEmpty from "lodash/isEmpty";
export default {
  name: "CreateUserExperience",
  components: {
    UserExperienceFields,
    BButton,
    BModal,
  },
  directives: {
    "b-modal": VBModal,
  },
  data() {
    return {
      userExperience: {
        organization: {},
        designation: "",
        employmentType: null,
        startYear: null,
        endYear: null,
        currentlyWorking: false,
      },
      loading: false,
    };
  },
  methods: {
    async handleAddNewExperience(bvModalEvt) {
      bvModalEvt.preventDefault();
      try {
        this.loading = true;
        const userExperience = {
          organizationId: this.userExperience.organization.id,
          ...this.userExperience,
        }; //TODO :: remove organization property from API call
        const res = await API.post(
          `experience/create-user-experience/user/${this.user.id}`,
          userExperience
        );
        if (res.status === 201) {
          this.$nextTick(() => {
            this.$bvModal.hide("add-experience-modal");
          });
          notificationToast(
            this,
            true,
            "Success !!",
            "Experience Added",
            "success"
          );
          this.$emit("onCreateExperience", userExperience);
        }
        this.loading = false;
        // hide modal
        this.resetFormData();
      } catch (error) {
        notificationToast(
          this,
          true,
          "Oppss !!",
          "something went wrong",
          "danger"
        );
      }
    },
    resetFormData() {
      this.userExperience = {};
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
    isUserExperienceEmpty: function () {
      return _isEmpty(this.userExperience.organization);
    },
  },
};
</script>

<style scoped></style>
