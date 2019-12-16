<template>
  <div class="page-container">
    <l-header />
    <nuxt />
    <l-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import lFooter from '~/components/layout/l-footer.vue';
import lHeader from '~/components/layout/l-header.vue';

@Component({
  components: {
    lFooter,
    lHeader,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
