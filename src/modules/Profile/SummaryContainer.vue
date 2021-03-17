<template>
  <div class="list-row py-3">
    <a href="" class="image-thumb">
      <b-img
        variant="primary"
        :src="logo"
        fluid
        rounded="circle"
        width="52"
      ></b-img>
    </a>
    <div class="list-content">
      <div class="list-title">{{ title }}</div>
      <div class="fs--1 text-black-60">
        {{ subtitle.substring(0, 180) + "..." }}
      </div>
      <div class="mt-3">
        <slot name="additional-info"></slot>
      </div>
      <div>
        <slot name="action-buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { BImg } from "bootstrap-vue";
export default {
  name: "SummaryContainer",
  components: {
    BImg,
  },
  props: {
    logo: String,
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
  },
};
</script>

<style lang="scss" scoped>
.list-row {
  border-bottom: rgb(241, 241, 241) solid 1px;
  color: rgba(0, 0, 0, 0.86);
  float: left;
  position: relative;
  width: 100%;
}
.image-thumb {
  position: relative;
  float: left;
  background-color: #fff;
  width: 70px;
}
.list-content {
  overflow: hidden;
  margin-right: 0;
}
.list-title {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: -0.2px;
}
.list-subline {
  font-size: 0.8125rem;
  line-height: 20px;
  text-decoration: none;
  font-weight: 400;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.72);
  letter-spacing: -0.2px;
}
</style>
