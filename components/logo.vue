<template>
  <nuxt-link :to="{ name: 'index' }" class="logo">
    <img v-if="false" src="/" alt="logo" />
    <span class="logo__alt">
      addis work
    </span>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  color: $white;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: $white;
    text-decoration: none;
  }

  &__alt {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
