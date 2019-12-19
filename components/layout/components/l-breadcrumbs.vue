<template>
  <b-breadcrumb class="breadcrumb">
    <b-breadcrumb-item
      v-for="(breacrumb, index) of breadcrumbs"
      :key="index"
      :text="$t(breacrumb.title)"
      :to="breacrumb.to"
    />
  </b-breadcrumb>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line no-unused-vars
import { Breadcrumb } from '~/types/breadcrumb';

@Component
export default class Breadcrumbs extends Vue {
  get breadcrumbs(): Breadcrumb[] {
    return this.$store.getters['breadcrumbs/get'];
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: $spacer / 2 0;

  &-item {
    font-size: $font-size-sm;
    a {
      color: $gray-500;
    }
  }
}
</style>
