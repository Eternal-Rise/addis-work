<template>
  <layout-default>
    <l-hero class="hero">
      <nuxt />
    </l-hero>
  </layout-default>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutDefault from '~/components/layout/layout-default.vue';
import lHero from '~/components/layout/components/l-hero.vue';

@Component({
  components: {
    LayoutDefault,
    lHero,
  },
})
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
.hero {
  align-items: center;
  display: flex;

  @include bp($sm) {
    padding: $spacer * 6.5 $spacer $spacer * 3;
  }

  @include bp($xl) {
    min-height: $sm;
    max-height: $md - $spacer * 5;
  }

  @include bp($xxl) {
    min-height: $md;
    max-height: $lg -$spacer * 5;
  }
}
</style>
