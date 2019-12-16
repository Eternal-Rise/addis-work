<template>
  <section class="addis-about">
    <h2 class="font-weight-bold text-capitalize text-center mb-5">
      {{ $t('TITLE_LANDING_ABOUT') }}
    </h2>
    <p v-html="$t('MESSAGE_INFO_LANDING_ABOUT')"></p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LandingAbout extends Vue {}
</script>

<style lang="scss" scoped>
.addis-about {
  margin: 0 auto;
  max-width: $md - $spacer * 2.1;
  padding: $spacer * 3 $spacer $spacer * 3.5;

  @include bp($lg) {
    padding: $spacer * 4.5 $spacer $spacer * 4;
  }
}
</style>
