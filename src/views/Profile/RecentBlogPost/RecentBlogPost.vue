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
        @ok="handleSubmit"
      >
        <CreateOrEditBlog v-model="blogPost" />
        <!--<b-form ref="blog" @submit.stop.prevent="handleSubmit">
          <b-input-group>
            <b-form-input
              placeholder="Post Title"
              v-model="title"
            ></b-form-input>
            <wysiwyg-input v-model="content" placeholder="Post Content" />
          </b-input-group>
        </b-form>-->
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
import Vue from "vue";
import {
  BRow,
  BCol,
  BButton,
  // BForm,
  // BInputGroup,
  // BFormInput,
} from "bootstrap-vue";
// import WysiwygInput from "../../../plugins/vue-quill-editor/WysiwygInput";
import RecentBlogPostDetails from "./RecentBlogPostDetails";
import { ModalPlugin } from "bootstrap-vue";
import CreateOrEditBlog from "../../Blog/CreateOrEditBlog";

Vue.use(ModalPlugin);

export default {
  name: "RecentBlogPost",
  components: {
    BRow,
    BCol,
    BButton,
    RecentBlogPostDetails,
    CreateOrEditBlog,
    // BForm,
    // BInputGroup,
    // BFormInput,
    // WysiwygInput,
  },

  data() {
    return {
      titleState: null,
      contentState: null,
      blogPost: {},
      title: "",
    };
  },
  mounted() {
    // console.log("Root API = ", this.$baseUrl);
  },
  methods: {
    /*validateBlogSubmit() {
      const valid = this.$ref.blog.checkValidity();
      this.titleState = valid;
      return valid;
    },*/
    async handleSubmit(bvModalEvt) {
      // if (!this.validateBlogSubmit()) return;
      bvModalEvt.preventDefault(); // prevent modal closing
      const blogPost = { title: this.title, content: this.content };
      await this.$http
        .post(`${this.$baseUrl}/experience/blog`, blogPost)
        .then((res) => console.log(res));

      //hide modal on submit
      this.$nextTick(() => {
        this.$bvModal.hide("create-post-modal");
      });
    },

    /*async postData() {
      try{
        await api
      }
    }*/
  },
  /*watch: {
    content(val) {
      console.log(val);
    },
    title(val) {
      console.log(val);
    },
  },*/
};
</script>

<style scoped></style>
