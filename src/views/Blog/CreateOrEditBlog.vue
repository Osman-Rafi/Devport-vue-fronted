<template>
  <b-form @submit.prevent="onSubmit">
    <b-input-group>
      <b-form-input placeholder="Post Title" v-model="title"></b-form-input>
      <wysiwyg-input :content="content" placeholder="Post Content" />
    </b-input-group>
    <button type="submit">submit</button>
  </b-form>
</template>

<script>
import { BForm, BInputGroup, BFormInput } from "bootstrap-vue";
import WysiwygInput from "../../plugins/vue-quill-editor/WysiwygInput";
export default {
  name: "CreateOrEditBlog",
  components: {
    BForm,
    BInputGroup,
    BFormInput,
    WysiwygInput,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.title, this.content);
    },
  },
};
</script>

<style scoped></style>
