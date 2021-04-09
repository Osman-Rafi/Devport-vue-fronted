<template>
  <div class="mx-3 border-bottom">
    <div class="mb-6">
      <section-header
        section-title="Selected User"
        title-class="font-weight-bold fs-0"
      />
      <b-row class="justify-content-lg-start justify-content-center">
        <b-col
          lg="3"
          v-for="(person, index) in selectedPersons"
          :key="index"
          class="mb-3 mb-lg-0 d-flex justify-content-lg-start justify-content-center"
        >
          <selected-user-container
            :name="person.name"
            :picture="person.profilePicture"
            :link="person.link"
            :location="person.location"
            :subtitle="person.description"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SectionHeader from "@/common/components/SectionHeader";
import { BRow, BCol } from "bootstrap-vue";
import SelectedUserContainer from "./Components/SelectedUserContainer";
import person1 from "@/assets/img/peoples/pexels-andrea-piacquadio-943084.jpg";
import person2 from "@/assets/img/peoples/pexels-david-gonzales-2406949.jpg";
import person3 from "@/assets/img/peoples/pexels-martin-péchy-2078265.jpg";
import person4 from "@/assets/img/peoples/pexels-photo-1484794.jpeg";

export default {
  name: "SelectedUser",
  components: {
    SectionHeader,
    BRow,
    BCol,
    SelectedUserContainer,
  },
  data() {
    return {
      selectedPersons: [
        {
          name: "Jakov Jasin",
          description:
            "Managing director of Libertas Group, a trading and financial consultancy firm.",
          location: "Madrid,Spain",
          link: "/",
          profilePicture: person2,
        },
        {
          name: "Erion Cuni",
          description: "Sowtare Developer with 10+ year experience",
          location: "Tirana, Albania",
          link: "/",
          profilePicture: person1,
        },
        {
          name: "Bruno Pincolini",
          description: "International MBA Candidate with 10+ year experience",
          location: "Barcelona,Spain",
          link: "/",
          profilePicture: person3,
        },
        {
          name: "Andreas Lepenets",
          description: "CEO & developer with 10+ year experience",
          location: "Ukraine",
          link: "/",
          profilePicture: person4,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
