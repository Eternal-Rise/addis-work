<template>
  <layout-default class="layout">
    <div class="inner default__inner">
      <l-breadcrumbs style="margin: 66px 0 0;" />
      <nuxt />
    </div>
  </layout-default>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutDefault from '~/components/layout/layout-default.vue';
import lBreadcrumbs from '~/components/layout/components/l-breadcrumbs.vue';

@Component({
  components: {
    LayoutDefault,
    lBreadcrumbs,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  background-color: $gray-200;
}

.default {
  &__inner {
    padding: 0 $spacer / 2;

    @include bp($sm) {
      padding: 0 $spacer;
    }
  }
}
</style>
