<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
