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
      <create-or-edit-experience
        v-model="userExperience"
        :handle-submit="handleAddNewExperience"
        :loading="loading"
      />
    </b-modal>
  </div>
</template>

<script>
import CreateOrEditExperience from "./CreateOrEditExperience";
import { BButton, VBModal, BModal } from "bootstrap-vue";
import { mapState } from "vuex";
import API from "@/api/Api";
import { notificationToast } from "@/common/components/NotificationToast";
import _isEmpty from "lodash/isEmpty";
export default {
  name: "CreateUserExperience",
  components: {
    CreateOrEditExperience,
    BButton,
    BModal,
  },
  directives: {
    "b-modal": VBModal,
  },
  data() {
    return {
      userExperience: {},
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
        if (res.data.status === 201) {
          //emit data
        }
        this.loading = false;
        // hide modal
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
