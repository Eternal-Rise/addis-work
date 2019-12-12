<template>
  <main class="main"></main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  background-image: linear-gradient(
      180deg,
      rgba($dark, 0.5) 0%,
      rgba(4, 20, 39, 0) 100%
    ),
    url('~assets/img/hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: auto;
}
</style>
