<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <p>Recent Blog Posts</p>
      <b-button
        variant="outline-default"
        size="sm"
        class="py-2"
        v-b-modal.create-post-modal
        >New Blog</b-button
      >
      <b-modal
        id="create-post-modal"
        title="Create New Blog"
        size="lg"
        button-size="sm"
        cancelTitle="Discard"
        okTitle="Save Post"
        :ok-disabled="!newBlogPost.titleState"
        @ok="handleSubmit"
        @hide="resetFormData"
      >
        <CreateOrEditBlog v-model="newBlogPost" :prevent-close="handleSubmit" />
      </b-modal>
    </div>
    <b-row>
      <b-col md="6">
        <RecentBlogPostDetails />
      </b-col>
      <b-col md="6">
        <RecentBlogPostDetails />
      </b-col>
      <b-col md="6">
        <RecentBlogPostDetails />
      </b-col>
      <b-col md="6">
        <RecentBlogPostDetails />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue"; //TODO: reduce it
import { BRow, BCol, BButton, ModalPlugin } from "bootstrap-vue";
import RecentBlogPostDetails from "./RecentBlogPostDetails";
import CreateOrEditBlog from "./CreateOrEditBlog";
import API from "@/api/Api";

Vue.use(ModalPlugin);

export default {
  name: "RecentBlogPost",
  components: {
    BRow,
    BCol,
    BButton,
    RecentBlogPostDetails,
    CreateOrEditBlog,
  },

  data() {
    return {
      newBlogPost: {
        titleState: false,
      },
    };
  },
  methods: {
    async handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault(); // prevent modal closing
      try {
        await API.post("blog-post", this.newBlogPost);
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }

      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("create-post-modal");
      });

      this.resetFormData();
    },
    resetFormData() {
      this.newBlogPost = {};
    },
  },
};
</script>

<style scoped></style>
