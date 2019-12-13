<template>
  <landing-hero>
    <landing-login />
  </landing-hero>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LandingHero from '~/components/landing/landing-hero.vue';
import LandingLogin from '~/components/landing/landing-login.vue';

@Component({
  components: {
    LandingHero,
    LandingLogin,
  },
})
export default class Landing extends Vue {}
</script>

<style lang="scss" scoped></style>
