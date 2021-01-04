<template>
  <b-form ref="blog" @submit.stop.prevent="handleSubmit">
    <b-input-group>
      <input
        type="text"
        name="title"
        class="form-control"
        placeholder="Post Title"
        @input="setField($event.target.value, 'title')"
      />
      <wysiwyg-input
        @change="(text) => setField(text, 'content')"
        placeholder="Post Content"
      />
    </b-input-group>
  </b-form>
</template>

<script>
import { BForm, BInputGroup } from "bootstrap-vue";
import WysiwygInput from "../../plugins/vue-quill-editor/WysiwygInput";
export default {
  name: "CreateOrEditBlog",
  components: {
    BForm,
    BInputGroup,
    WysiwygInput,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    setField(value, field) {
      if (field === "title") this.title = value;
      if (field === "content") this.content = value;

      this.$emit("input", {
        title: this.title,
        content: this.content,
      });
    },
  },
};
</script>

<style scoped></style>
