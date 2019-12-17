<template>
  <layout-default>
    <nuxt />
  </layout-default>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutDefault from '~/components/layout/layout-default.vue';

@Component({
  components: {
    LayoutDefault,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped></style>
