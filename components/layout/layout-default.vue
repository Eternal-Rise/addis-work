<template>
  <div class="page-container">
    <l-header />
    <slot></slot>
    <l-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import lFooter from '~/components/layout/components/l-footer.vue';
import lHeader from '~/components/layout/components/l-header.vue';
import lHero from '~/components/layout/components/l-hero.vue';

@Component({
  components: {
    lFooter,
    lHeader,
    lHero,
  },
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
