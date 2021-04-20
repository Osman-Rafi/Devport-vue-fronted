<template>
  <div class="footer-container">
    <div class="border-top mx-lg-13 mx-5">
      <b-row class="justify-content-between mt-5">
        <b-col lg="4">
          <b-row>
            <b-col xl="6">
              <p class="font-weight-bold">GENERAL</p>
              <ul class="list-unstyled">
                <list-item title="Organization" />
                <list-item title="Become an ambassador" />
                <list-item title="Insider porgram" />
              </ul>
            </b-col>
            <b-col class="mt-lg-4">
              <ul class="mt-lg-3 list-unstyled">
                <list-item title="Explore" />
                <list-item title="Search" />
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="2">
          <p class="font-weight-bold">COMPANY</p>
          <ul class="list-unstyled">
            <list-item title="About us" />
            <list-item title="Terms & Conditions" />
            <list-item title="Privacy Policy" />
          </ul>
        </b-col>
      </b-row>
      <p class="fs--2 mt-4 mb-0">
        © Copyright 2021 Devport. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import ListItem from "../components/ListItem";
export default {
  name: "Footer",
  components: {
    BRow,
    BCol,
    ListItem,
  },
};
</script>

<style scoped lang="scss">
.footer-container {
  background-color: #f3f3f7;
}
</style>
