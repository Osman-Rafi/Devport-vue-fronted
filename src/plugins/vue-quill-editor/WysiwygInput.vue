<template>
  <quill-editor
    class="py-3"
    v-model="content"
    :options="{
      placeholder: placeholder,
    }"
  ></quill-editor>
</template>

<script>
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "WysiwygInput",
  components: {
    quillEditor,
  },
  props: {
    content: String,
    placeholder: {
      type: String,
      default: "Insert your text here...",
    },
  },
};
</script>

<style scoped></style>
