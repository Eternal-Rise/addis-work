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
  background-color: rgba($dark, 0.6);
  border-radius: 8px;
  color: $white;
  margin: auto;
  max-width: 430px;
  padding: $spacer $spacer / 2;

  @include bp($sm) {
    padding: $spacer $spacer * 2.5;
  }
}
</style>
