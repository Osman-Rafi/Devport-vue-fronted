<template>
  <div class="mx-3 mt-5 border-bottom">
    <section-header section-title="Selected user content" title-class="fs-0" />
    <b-row class="mt-3">
      <b-col v-for="(content, index) in selectedContent" :key="index" lg="4">
        <selected-content-container
          :title="content.title"
          :description="content.description"
          :img="content.img"
          :tag="content.tag"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SectionHeader from "@/common/components/SectionHeader";
import SelectedContentContainer from "./Components/SelectedContentContainer";
import { BRow, BCol } from "bootstrap-vue";
import contentImage1 from "@/assets/img/banner/linear-banner-hyperloop-line-vector-illustration-concept.jpg";
import contentImage2 from "@/assets/img/banner/business-vision-businessman-telescope-standing-ladder-clouds-successful-future-achievements-sketch-business-vision-131375208.jpg";
import contentImage3 from "@/assets/img/banner/vcision.jpg";

export default {
  name: "SelectedContents",
  components: {
    SectionHeader,
    BRow,
    BCol,
    SelectedContentContainer,
  },
  data() {
    return {
      selectedContent: [
        {
          title: "Washington Hyperloop (Comp V)",
          description:
            "Hyperloop is a conceptual high-speed transportation system popularized by entrepreneur Elon Musk, " +
            "incorporating partially evacuated tubes in which pressurized capsules ride on an air cushion driven by " +
            "linear induction motors and air compressors.  In the summer of 2015, SpaceX revealed that they...",
          img: contentImage1,
          tag: "Technology",
        },
        {
          title:
            "The “Belt and Road Initiative” overview and its potential effects",
          description:
            "In late 2013, the “Belt and Road Initiative” (BRI), also known " +
            "as “One Belt, One Road” initiative (OBOR) or as the “New Silk Road” was proposed " +
            "and formally announced by President Xi Jinping as the drivers of China’s economic " +
            "growth for the past three decades and decades to follow. The project is made up of",
          img: contentImage2,
          tag: "Future of Economy",
        },
        {
          title: "Global Aspects in Managing Customer Relationships",
          description:
            "With today’s ever-changing technology and the world’s shift to digitalization," +
            " customers are now holding powerful positions in purchasing decisions and are increasingly " +
            "demanding. As a result, companies’ traditional mass-marketing is no longer ensuring their " +
            "survival alongside competitors arena",
          img: contentImage3,
          tag: "knowledge & management",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
