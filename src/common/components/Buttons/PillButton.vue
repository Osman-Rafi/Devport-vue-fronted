<template>
  <div class="pill-item">
    <router-link :to="link" class="pill-button px-3 py-2 text-decoration-none"
      >{{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PillButton",
  props: {
    title: { type: String, required: true },
    link: { type: String },
  },
};
</script>

<style scoped lang="scss">
.pill-item {
  margin: 0 10px 10px 0;
  float: left;
  position: relative;
}

.pill-button {
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 170, 0.05);
  border-radius: 20px;
  border: none;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  line-height: 30px;
}
</style>
