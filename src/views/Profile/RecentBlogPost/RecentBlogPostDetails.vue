<template>
  <div>
    <b-card class="mb-3">
      <div class="d-flex justify-content-between">
        <a class="text-blue font-weight-700">This is Blog post title</a>
        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret right>
          <template v-slot:button-content>
            <font-awesome-icon icon="ellipsis-v"/>
          </template>
          <b-dropdown-item href="#!">Edit Post</b-dropdown-item>
          <b-dropdown-item href="#!">Delete Post</b-dropdown-item>
        </b-dropdown>
      </div>
      <p class="mt-2 fs--3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        ad, autem corporis dolores earum enim esse, facilis iusto numquam
        obcaecati officia placeat quaerat, qui quis quos reprehenderit vel
        veritatis.
      </p>
      <p class="fs--2">
        <span class="mr-2">
          <font-awesome-icon icon="thumbs-up" class="mr-1 text-primary" /> 5
        </span>
        <span>
          <font-awesome-icon icon="comment" class="mr-1 text-primary" /> 3
        </span>
      </p>
    </b-card>
  </div>
</template>

<script>
import { BCard, BDropdown, BDropdownItem } from "bootstrap-vue";
export default {
  name: "RecentBlogPostDetails",
  components: {
    BCard,
    BDropdown,
    BDropdownItem,
  },
};
</script>

<style scoped></style>
