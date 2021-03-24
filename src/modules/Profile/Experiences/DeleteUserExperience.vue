<template>
  <b-modal
    id="delete-experience-modal"
    title="Delete Experience ?"
    @ok="handleDeleteUserExperience"
    ok-variant="outline-danger"
    cancel-variant="outline-secondary"
    ok-title="Delete"
    button-size="sm"
  >
    <p>This experience will be deleted permanently.</p>
  </b-modal>
</template>

<script>
import { VBModal, BModal } from "bootstrap-vue";
import API from "@/api/Api";
import { notificationToast } from "@/common/components/NotificationToast";
import { mapState } from "vuex";

export default {
  name: "DeleteUserExperience",
  props: {
    experience: Object,
  },
  components: { BModal },
  directives: {
    "b-modal": VBModal,
  },
  methods: {
    handleDeleteUserExperience(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit(this.experience);
      this.$nextTick(() => {
        this.$bvModal.hide("delete-experience-modal");
      });
    },

    async handleSubmit(experience) {
      try {
        const res = await API.delete(
          `experience/delete-user-experience/user/${this.user.id}/experience/${experience.id}`
        );
        if (res.status === 200) {
          this.$emit("onDeleteExperience", experience);
          notificationToast(
            this,
            true,
            "Success !!",
            "Experience Deleted",
            "success"
          );
        }
      } catch (e) {
        notificationToast(
          this,
          true,
          "Oppss !!",
          "something went wrong",
          "danger"
        );
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
};
</script>

<style scoped></style>
