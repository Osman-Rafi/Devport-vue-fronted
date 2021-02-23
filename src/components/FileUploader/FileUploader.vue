<template>
  <file-pond
    accepted-file-types="image/jpeg, image/png"
    :files="files"
    :label-idle="label"
    @addfile="onAddFile"
  />
</template>

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
// import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

const FilePond = vueFilePond(
  // FilePondPluginFileValidateType,  // need to reinstall to NPM
  FilePondPluginImagePreview
);
export default {
  name: "FileUploader",
  components: {
    FilePond,
  },
  props: {
    label: {
      type: String,
      default: "Drop files here...",
    },
    fileName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    onAddFile(error, file) {
      const formData = new FormData();
      formData.append(this.fileName, file.file);
      this.$emit("input", formData);
    },
  },
};
</script>

/*
Ref:https://stackoverflow.com/questions/66316190/how-to-send-images-with-vue-filepond-via-axios/66322368#66322368
*/
