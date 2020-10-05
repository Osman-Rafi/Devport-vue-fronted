<template>
  <div>
    <side-bar></side-bar>
    <b-row>
      <b-col>
        <header-plugin></header-plugin>
      </b-col>
    </b-row>
    <div class="ml-9">
      <div class="ml-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPlugin from "../../../components/HeaderPlugin/HeaderPlugin";
import SideBar from "../../../components/SidebarPlugin/SideBar";
import { BRow, BCol } from "bootstrap-vue";
export default {
  name: "DashboardLayout",
  components: {
    HeaderPlugin,
    SideBar,
    BRow,
    BCol,
  },
};
</script>
