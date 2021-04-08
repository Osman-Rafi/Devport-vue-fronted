<template>
  <div>
    <Header />
    <div class="mt-7">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "../../Header/Common/Header";
import {} from "bootstrap-vue";

export default {
  name: "GeneralLayout",
  components: {
    Header,
  },
};
</script>

<style scoped></style>
