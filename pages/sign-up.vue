<template>
  <nuxt-child />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  layout: 'hero',
})
export default class SignUp extends Vue {}
</script>

<style lang="scss" scoped></style>
