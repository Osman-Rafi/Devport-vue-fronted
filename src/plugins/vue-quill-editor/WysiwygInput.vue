<template>
  <div class="my-3">
    <quill-editor
      :options="{
        placeholder: placeholder,
      }"
      v-on:change="($event) => $emit('change', $event.text)"
    ></quill-editor>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "WysiwygInput",
  model: {
    prop: "content",
    event: "change",
  },
  props: {
    placeholder: {
      type: String,
      default: "Insert your text here...",
    },
  },
  components: {
    quillEditor,
  },
};
</script>

<style>
.ql-editor {
  min-height: 200px !important;
}
</style>
