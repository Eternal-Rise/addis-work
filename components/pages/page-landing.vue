<template>
  <div>
    <l-hero>
      <landing-login />
    </l-hero>
    <landing-about />
    <landing-pricing />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LandingAbout from '~/components/landing/landing-about.vue';
import LandingLogin from '~/components/landing/landing-login.vue';
import LandingPricing from '~/components/landing/landing-pricing.vue';
import lHero from '~/components/layout/components/l-hero.vue';

@Component({
  components: {
    LandingAbout,
    LandingLogin,
    LandingPricing,
    lHero,
  },
})
export default class Landing extends Vue {}
</script>

<style lang="scss" scoped></style>
