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
      <b-modal id="create-post-modal" title="Create New Blog" size="lg" button-size="sm" cancelTitle="Discard" okTitle="Save Post">
        <CreateOrEditBlog />
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
import { BRow, BCol, BButton, BModal, VBModal } from "bootstrap-vue";
import RecentBlogPostDetails from "./RecentBlogPostDetails";
import CreateOrEditBlog from "../../Blog/CreateOrEditBlog";
export default {
  name: "RecentBlogPost",
  components: {
    BRow,
    BCol,
    BButton,
    BModal,
    RecentBlogPostDetails,
    CreateOrEditBlog,
  },
  directives: {
    "b-modal": VBModal,
  },
};
</script>

<style scoped></style>
