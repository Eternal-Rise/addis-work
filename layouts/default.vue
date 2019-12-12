<template>
  <div class="page-container">
    <layout-header />
    <nuxt />
    <layout-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutFooter from '~/components/layout/layout-footer.vue';
import LayoutHeader from '~/components/layout/layout-header.vue';

@Component({
  components: {
    LayoutFooter,
    LayoutHeader,
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
