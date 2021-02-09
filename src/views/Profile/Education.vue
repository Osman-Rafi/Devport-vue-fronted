<template>
  <div>
    <SectionHeader section-title="Educations" add-more-route="#" />
    <b-card>
      <b-list-group-item class="d-flex align-items-center border-0">
        <b-avatar variant="primary" size="5rem" text="M"></b-avatar>
        <div class="fs-0 ml-3">
          <p class="font-weight-600 mb-0 fs-0">Metropolitan University Bangladesh</p>
          <p class="mb-0">Bachelor of Science</p>
          <p class="text-black-50 mb-0">2015-2019</p>
        </div>
      </b-list-group-item>
    </b-card>
  </div>
</template>

<script>
import { BCard, BListGroupItem, BAvatar } from "bootstrap-vue";
import SectionHeader from "./SectionHeader";
export default {
  name: "Education",
  components: {
    SectionHeader,
    BCard,
    BListGroupItem,
    BAvatar,
  },
};
</script>

<style scoped lang="scss">
.title-border {
  border-bottom: 1px solid #000;
}
</style>
