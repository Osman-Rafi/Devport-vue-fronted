<template>
  <div class="mb-3">
    <section-header section-title="Educations" />
    <template v-if="educations.length === 0">
      <empty-field title="Add your Experiences here with proper details" />
    </template>
    <template v-else>
      <b-card class="d-flex card-shadow">
        <b-list-group-item
          class="d-flex justify-content-between border-0"
          v-for="(education, index) in educations"
          :key="index"
        >
          <summary-container
            :class="index === educations.length - 1 ? '' : 'border-bottom-pro'"
            :logo="education.education_institution.logo"
            :title="education.education_institution.institution_name"
          >
            <template v-slot:additional-info>
              <div class="fs-0">
                <p class="mb-0 fs--1 font-weight-600 text-black-70">
                  {{ education.degree }}
                </p>
                <p
                  class="text-black-50 mb-0 text-black-60 fs--1"
                  v-if="education.start_year"
                >
                  Form {{ education.start_year }} to {{ education.end_year }}
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
import { BCard, BListGroupItem } from "bootstrap-vue";
import SummaryContainer from "@/common/components/SummaryContainer";

export default {
  name: "UserEducation",
  components: {
    SectionHeader,
    EmptyField,
    BCard,
    BListGroupItem,
    SummaryContainer,
  },
  props: {
    educations: { type: Array, required: true },
  },
};
</script>

<style scoped></style>
