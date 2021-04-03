<template>
  <div class="base-views">
    <div class="frame-outer">
      <div class="frame-inner">
        <div :class="{ root: true, sidebarClose }">
          <Header />
          <SideBar />
          <div ref="content" class="content">
            <div class="content-inner-box">
              <transition name="fade" mode="out-in">
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
              </transition>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header/Header";
import SideBar from "../Sidebar/DashboardSidebar/Sidebar";
import Footer from "../Footer/Footer";
import { mapState } from "vuex";

export default {
  name: "DashboardLayout",
  components: {
    Header,
    SideBar,
    Footer,
  },
  computed: {
    ...mapState("layout", {
      sidebarClose: (state) => state.sidebarClose,
    }),
  },
};
</script>

<style src="./DashboardLayout.scss" lang="scss" />
