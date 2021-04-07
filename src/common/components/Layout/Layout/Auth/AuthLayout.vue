<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/common/components/Layout/Header/Common/Header";
export default {
  name: "AuthLayout",
  components: {
    Header,
  },
};
</script>

<style scoped></style>
