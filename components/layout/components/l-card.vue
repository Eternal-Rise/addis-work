<template>
  <div class="addis-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LCard extends Vue {}
</script>

<style lang="scss" scoped>
.addis-card {
  background-color: $white;
  border-radius: 8px;
  color: $dark;
  margin: auto;
  padding: $spacer $spacer / 2 $spacer * 1.5;
  width: 100%;

  @include bp($sm) {
    padding: $spacer $spacer * 2.5 $spacer * 1.5;
  }

  &._accent {
    background-color: $primary;
    color: $white;
  }

  &._dark {
    background-color: rgba($dark, 0.6);
    color: $white;
  }

  &._fixed-width {
    max-width: 432px;

    @include bp($xxl) {
      max-width: 500px;
    }
  }
}
</style>
