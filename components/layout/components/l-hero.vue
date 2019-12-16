<template>
  <main class="hero">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LandingHero extends Vue {}
</script>

<style lang="scss" scoped>
.hero {
  background-image: linear-gradient(
      180deg,
      rgba($dark, 0.5) 0%,
      rgba(4, 20, 39, 0) 100%
    ),
    url('~assets/img/hero-sm.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  padding: $spacer * 7.5 $spacer / 2 $spacer * 6;

  @include bp($sm) {
    background-image: linear-gradient(
        180deg,
        rgba($dark, 0.5) 0%,
        rgba(4, 20, 39, 0) 100%
      ),
      url('~assets/img/hero.jpg');
    padding: $spacer * 8.75 $spacer $spacer * 6;
  }

  @include bp($xl) {
    height: 100vh;
    min-height: $md;
    max-height: $lg - $spacer * 4;
  }
}
</style>
