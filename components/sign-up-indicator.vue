<template>
  <div class="indicator">
    <div :class="nextStep ? '' : '_active'" class="indicator__item">
      1
    </div>
    <div class="indicator__divider"></div>
    <div :class="nextStep ? '_active' : ''" class="indicator__item">
      2
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RegisterIndicator extends Vue {
  @Prop({ required: false, type: Boolean, default: false })
  readonly nextStep!: boolean;
}
</script>

<style lang="scss" scoped>
.indicator {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 0 $spacer * 1.4;

  &__item {
    border-radius: 50%;
    border: 1px solid $white;
    color: $white;
    font-size: $font-size-xs;
    line-height: 22px;
    text-align: center;
    width: 24px;

    &._active {
      background-color: $primary;
      border-color: $primary;
    }
  }

  &__divider {
    background-color: $primary;
    height: 2px;
    margin: 0 $spacer / 2;
    width: $spacer * 2;
  }
}
</style>
