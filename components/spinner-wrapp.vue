<template>
  <div class="addis-spinner">
    <div v-if="loading" class="addis-spinner__wrapp">
      <b-spinner variant="primary" />
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SpinnerWrapp extends Vue {
  @Prop({ required: true, type: Boolean })
  readonly loading!: boolean;
}
</script>

<style lang="scss" scoped>
.addis-spinner {
  // for spinner
  position: relative;

  &__wrapp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
