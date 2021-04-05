<template>
  <div>
    <section-header section-title="Experience" />
    <template v-if="experiences.length === 0">
      <empty-field title="Add your Experiences here with proper details" />
    </template>
    <template v-else>
      <b-card class="d-flex card-shadow px-4">
        <b-list-group-item
          class="d-flex justify-content-between border-0 pl-0"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <summary-container
            :class="index === experiences.length - 1 ? '' : 'border-bottom-pro'"
            :logo="experience.organization.logo"
            :title="experience.organization.name"
            :subtitle="experience.organization.description"
          >
            <template v-slot:additional-info>
              <div class="d-flex">
                <p
                  v-if="experience.designation"
                  class="mb-0 fs--1 font-weight-600"
                >
                  {{ experience.designation }}
                </p>
                <p
                  v-if="experience.designation && experience.employmentType"
                  class="mx-1 mb-0"
                >
                  ·
                </p>
                <p
                  v-if="experience.employmentType"
                  class="ml-1 mb-0 fs--1 font-weight-600"
                >
                  {{ experience.employmentType }}
                </p>
              </div>
              <div class="d-flex fs--1 text-black-60">
                <template v-if="experience.startYear">
                  <p class="mb-0">
                    {{ experience.startYear }} to
                    <template v-if="experience.currentlyWorking">
                      Present
                    </template>
                    <template v-else>
                      {{ experience.endYear }}
                    </template>
                  </p>
                </template>
                <p
                  v-if="experience.endYear || experience.currentlyWorking"
                  class="mx-2 mb-0"
                >
                  ·
                </p>
                <p class="mb-0">
                  <template v-if="experience.organization.country">
                    {{ experience.organization.country }},
                  </template>
                  <template v-if="experience.organization.city">{{
                    experience.organization.city
                  }}</template>
                </p>
              </div>
            </template>
          </summary-container>
        </b-list-group-item>
      </b-card>
    </template>
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader";
import EmptyField from "@/common/components/Cards/EmptyField";
import SummaryContainer from "@/common/components/SummaryContainer";
import { BCard, BListGroupItem } from "bootstrap-vue";
export default {
  name: "UserExperience",
  props: {
    experiences: { type: Array, required: true },
  },
  components: {
    SectionHeader,
    EmptyField,
    BCard,
    BListGroupItem,
    SummaryContainer,
  },
};
</script>

<style scoped></style>
