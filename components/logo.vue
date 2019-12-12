<template>
  <div class="logo">
    <img v-if="false" src="/" alt="logo" />
    <span class="logo__alt">
      addis work
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  &__alt {
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
