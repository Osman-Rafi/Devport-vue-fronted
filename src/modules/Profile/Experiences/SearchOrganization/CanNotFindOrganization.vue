<template>
  <b-list-group flush>
    <b-list-group-item class="d-flex p-0 justify-content-between">
      <div class="d-flex">
        <div class="pl-2">
          <b-avatar variant="dark" square>
            <font-awesome-icon :icon="['far', 'building']" class="fa-2x" />
          </b-avatar>
        </div>
        <div class="pl-3">
          <p class="mb-0 fs-0">Can't find your Organization</p>
          <p class="fs--1 font-weight-600">Add One ?</p>
        </div>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BListGroup, BListGroupItem, BAvatar } from "bootstrap-vue";
export default {
  name: "CanNotFindOrganization",
  components: {
    BListGroup,
    BListGroupItem,
    BAvatar,
  },
};
</script>

<style scoped></style>
