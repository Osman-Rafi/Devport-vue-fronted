<template>
  <div>
    <Header />
    <div class="mt-7">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../Header/Common/Header";
import Footer from "../../Footer/Common/Footer";

export default {
  name: "GeneralLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
