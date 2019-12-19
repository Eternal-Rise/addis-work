<template>
  <section class="addis-pricing">
    <h2
      class="addis-pricing__title font-weight-bold text-center text-capitalize mb-6"
    >
      {{ $t('TITLE_LANDING_PRICING') }}
    </h2>

    <div class="addis-pricing__list">
      <div
        v-for="i of [1, 3, 6, 12]"
        :key="i"
        :class="i === 6 ? '_primary' : ''"
        class="addis-pricing__item"
      >
        <header class="addis-pricing__item-header">
          <h5 class="font-weight-bold text-center m-0">
            {{ i }} {{ i === 1 ? $t('LABEL_MONTH') : $t('LABEL_MONTHS') }}
          </h5>
        </header>
        <div class="addis-pricing__item-body">
          <div
            class="addis-pricing__text mb-4"
            v-html="$t(`LABEL_PRICING_${i}`)"
          ></div>
          <div class="addis-pricing__price">
            {{ $t(`LABEL_PRICING_PRICE_${i}`) }}
          </div>
          <nuxt-link :to="{ name: 'sign-up' }" style="text-decoration: none">
            <b-button
              class="addis-btn _primary addis-pricing__btn"
              variant="primary"
            >
              {{ $t('LABEL_SIGN_UP') }}
            </b-button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LandingPricing extends Vue {}
</script>

<style lang="scss" scoped>
.addis-pricing {
  $this: &;
  background-color: $light;
  padding: $spacer * 4 $spacer $spacer * 4;

  @include bp($lg) {
    padding: $spacer * 4.5 $spacer $spacer * 4;
  }

  &__list {
    margin: auto;
    max-width: 270px;

    @include bp($md) {
      display: flex;
      flex-wrap: wrap;
      max-width: initial;
      margin: 0 -$spacer / 2;
    }

    @include bp($lg) {
      max-width: $md;
      margin: 0 auto;
    }

    @include bp($xl) {
      max-width: $xl - $spacer * 2.5;
    }
  }

  &__item {
    border-radius: $border-radius-lg;
    box-shadow: 0 0 $spacer / 2 $gray-300;
    margin: 0 0 $spacer * 1.2;
    text-align: center;
    display: flex;
    flex-direction: column;

    @include bp($md) {
      margin: 0 $spacer / 2 $spacer;
      width: calc(50% - #{$spacer});
    }

    @include bp($xl) {
      width: calc(25% - #{$spacer});
    }

    &._primary {
      #{$this}__item-body {
        box-shadow: inset 0 0 0 1px $primary;
      }

      #{$this}__item-header {
        background-color: $primary;
        box-shadow: inset 0 0 0 1px $primary;
      }
    }
  }

  &__item-body {
    background-color: $white;
    border-radius: 0 0 $border-radius-lg $border-radius-lg;
    padding: $spacer * 2 $spacer $spacer * 1.6;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__item-header {
    background-color: $dark;
    border-radius: $border-radius-lg $border-radius-lg 0 0;
    color: $white;
    padding: $spacer 0;
  }

  &__btn {
    display: block;
    margin: 0 auto;
    width: 160px;
  }

  &__price {
    color: $primary;
    font-weight: 600;
    margin: auto 0 $spacer * 1.1;
    font-size: $font-size-lg * 1.2;
  }

  &__text {
    font-size: $font-size-lg;
  }
}
</style>
