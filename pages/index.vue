<template>
  <page-landing />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLanding from '~/components/pages/page-landing.vue';

@Component({
  components: {
    PageLanding,
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
