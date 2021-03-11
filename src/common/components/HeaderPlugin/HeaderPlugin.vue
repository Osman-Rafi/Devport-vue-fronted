<template>
  <b-navbar class="navbar-container border-bottom">
    <b-form class="d-none d-md-block">
      <b-form-group id="nav-search" class="mb-0">
        <b-form-input size="sm" placeholder="Search.."></b-form-input>
      </b-form-group>
    </b-form>
    <b-navbar-nav class="ml-auto">
      <b-list-group>
        <!--<b-list-item>
          <b-avatar size="5rem"></b-avatar>
        </b-list-item>-->
      </b-list-group>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BForm,
  BFormGroup,
  BFormInput,
  BNavbarNav,
  BListGroup,
} from "bootstrap-vue";
export default {
  name: "Header",
  components: {
    BNavbar,
    BForm,
    BFormGroup,
    BFormInput,
    BNavbarNav,
    // BAvatar,
    BListGroup,
  },
};
</script>

<style scoped></style>

<!--template>
  <div
    id="header"
    class="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered"
  >
    <div class="navbar-nav-wrap justify-content-between">
      &lt;!&ndash;<div class="navbar-brand-wrapper"></div>&ndash;&gt;
      <div class="navbar-nav-wrap-content-left">
        <div class="d-none d-md-block">
          <form action="" class="position-relative">
            <div class="input-group">
              <input type="text" />
              <a href="">submit</a>
            </div>
          </form>
        </div>
      </div>
      <div class="navbar-nav-wrap-content-right">
        <ul class="navbar-nav align-items-center flex-row">
          <li class="nav-item">notification</li>
          <li class="nav-item">avatar</li>
        </ul>
      </div>
    </div>
  </div>
</template>-->
