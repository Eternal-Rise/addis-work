<template>
  <div>
    <landing-hero>
      <landing-login />
    </landing-hero>
    <landing-about />
    <landing-pricing />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LandingAbout from '~/components/landing/landing-about.vue';
import LandingHero from '~/components/landing/landing-hero.vue';
import LandingLogin from '~/components/landing/landing-login.vue';
import LandingPricing from '~/components/landing/landing-pricing.vue';

@Component({
  components: {
    LandingAbout,
    LandingHero,
    LandingLogin,
    LandingPricing,
  },
})
export default class Landing extends Vue {}
</script>

<style lang="scss" scoped></style>
