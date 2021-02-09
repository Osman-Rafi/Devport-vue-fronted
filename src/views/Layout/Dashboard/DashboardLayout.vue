<template>
  <div>
    <b-row class="justify-content-center">
      <b-col sm="12" lg="10">
        <Header />
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col sm="12" lg="10">
        <b-row>
          <b-col sm="2" class="border-right">
            <SideBar />
          </b-col>
          <b-col>
            <transition name="fade" mode="out-in"> <router-view /> </transition
            >>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import SideBar from "./Sidebar";
import { BRow, BCol } from "bootstrap-vue";
export default {
  name: "DashboardLayout",
  components: {
    Header,
    SideBar,
    BRow,
    BCol,
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #f1f1f1;
}
</style>
