<template>
  <div>
    <b-modal
      id="edit-experience-modal"
      title="Edit Experience"
      cancelTitle="Discard"
      okTitle="Save"
      button-size="sm"
      hide-header-close
      return-focus="false"
      @ok="handleEditExperience"
      @hide="resetFormData"
    >
      <user-experience-fields
        :user-experience="userExperience"
        :handle-submit="handleEditExperience"
        :loading="loading"
      />
    </b-modal>
  </div>
</template>

<script>
import { VBModal, BModal } from "bootstrap-vue";
import UserExperienceFields from "@/modules/Profile/Experiences/UserExperienceFields";
import { mapState } from "vuex";
import { notificationToast } from "@/common/components/NotificationToast";
import API from "@/api/Api";

export default {
  name: "EditUserExperience",
  components: {
    UserExperienceFields,
    BModal,
  },
  props: {
    experience: {
      type: Object,
      required: true,
    },
    updateExperience: Object,
  },
  directives: {
    "b-modal": VBModal,
  },
  data() {
    return {
      loading: false,
      userExperience: this.experience,
      updatedUserExperience: {},
    };
  },
  methods: {
    async handleEditExperience(bvModalEvt) {
      try {
        bvModalEvt.preventDefault();
        this.loading = true;
        const userExperience = {
          ...this.userExperience,
          organizationId: this.userExperience.organization.id,
        };
        const res = await API.put(
          `experience/update-user-experience/user/${this.user.id}/experience/${userExperience.id}`,
          userExperience
        );
        this.loading = false;
        if (res.status === 201) {
          // this.$emit("updateExperience", userExperience);
          // @updateExperience=updateExperience
          notificationToast(
            this,
            true,
            "Success !!",
            "Experience Added",
            "success"
          );
        }

        // hide modal
        this.$nextTick(() => {
          this.$bvModal.hide("edit-experience-modal");
        });

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
  },
  created() {
    console.log("initiated");
  },
};
</script>

<style scoped></style>
