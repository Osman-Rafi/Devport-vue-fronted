<template>
  <b-card body-class="p-0" class="h-100">
    <div class="cover-container"></div>
    <div class="profile-picture-container">
      <router-link :to="link" class="profile-picture-frame">
        <img :src="picture" class="profile-picture" :alt="name" />
      </router-link>
    </div>
    <b-card-text>
      <div class="text-center p-2">
        <h3 class="fs-0">{{ name }}</h3>
        <p class="fs--1 text-center mt-2 text-black-70">{{ subtitle }}</p>
      </div>
      <div class="mt-3 text-center">
        <p class="fs--2 text-black-70">
          <font-awesome-icon icon="map-marker-alt" />
          {{ location }}
        </p>
        <div class="d-flex align-items-end justify-content-center mt-3">
          <b-button
            variant="outline-primary"
            class="mt-1 px-5 px-md-3 px-xl-6 mb-4"
          >
            Profile
          </b-button>
        </div>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
import { BCard, BCardText, BButton } from "bootstrap-vue";
export default {
  name: "SelectedUserCard",
  components: {
    BCard,
    BCardText,
    BButton,
  },
  props: {
    name: { type: String, required: true },
    subtitle: { type: String },
    location: { type: String },
    link: { type: String },
    picture: { type: String },
  },
};
</script>

<style scoped lang="scss">
.cover-container {
  height: 100px;
  opacity: 0.5;
  background-color: rgb(133, 99, 87);
}
.profile-picture-container {
  margin-top: -100px;
  display: flex;
  justify-content: center;
}
.profile-picture-frame {
  position: relative;
  display: inline-block;
  border: 0 solid;
  border-radius: 50%;
  margin-top: 20px;
  padding: 8px;
  background: #fff;
  opacity: 1;
}
.profile-picture {
  border-radius: 50%;
}
</style>
