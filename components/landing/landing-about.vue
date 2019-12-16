<template>
  <section class="addis-about">
    <h3 class="font-weight-bold text-capitalize text-center mb-4">
      {{ $t('TITLE_LANDING_ABOUT') }}
    </h3>
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
  max-width: 680px;
  padding: $spacer * 3.5 $spacer;
}
</style>
