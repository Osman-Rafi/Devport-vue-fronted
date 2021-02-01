<template>
  <b-form ref="blog" @submit.stop.prevent="preventClose">
    <b-form-group invalid-feedback="Post title is required" :state="titleState">
      <b-form-input
        type="text"
        name="title"
        class="form-control"
        placeholder="Post Title"
        required
        :state="titleState"
        @update="($event) => setField($event, 'title')"
      />
    </b-form-group>
    <wysiwyg-input
      @change="(text) => setField(text, 'description')"
      placeholder="Post Content"
    />
  </b-form>
</template>

<script>
import { BForm, BFormGroup, BFormInput } from "bootstrap-vue";
import WysiwygInput from "../../plugins/vue-quill-editor/WysiwygInput";
export default {
  name: "CreateOrEditBlog",
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    WysiwygInput,
  },
  props: {
    preventClose: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      title: "",
      description: "",
      titleState: null,
    };
  },
  methods: {
    setField(value, field) {
      if (field === "title") {
        this.title = value;
        this.validateTitle();
      }
      if (field === "description") this.description = value;

      this.$emit("input", {
        title: this.title,
        description: this.description,
        titleState: this.titleState,
      });
    },
    validateTitle() {
      const valid = this.title.length > 0;
      this.titleState = valid;
      return valid;
    },
  },
};
</script>
