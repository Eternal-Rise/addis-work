<template>
  <header class="addis-header">
    <div class="inner addis-header__inner">
      <logo />
      <div class="addis-header__wrapp">
        <lang-switcher class="addis-header__lang-switcher" />
        <hamburger @click.native="toggleVisible" />
        <div
          :class="visible ? 'visible' : ''"
          class="addis-header__buttons-group"
        >
          <nuxt-link
            :to="{ name: 'employer-sign-in' }"
            class="mr-lg-3 addis-header__buttons-group-item"
          >
            <b-button class="addis-btn _primary" variant="primary">
              {{ $t('LABEL_SIGN_IN_EMPLOYER') }}
            </b-button>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'sign-up' }"
            class="addis-header__buttons-group-item mb-3 mb-lg-0"
          >
            <b-button class="addis-btn" variant="outline-primary">
              {{ $t('LABEL_SIGN_UP') }}
            </b-button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hamburger from '~/components/hamburger.vue';
import LangSwitcher from '~/components/lang-switcher.vue';
import Logo from '~/components/logo.vue';

@Component({
  components: {
    Hamburger,
    LangSwitcher,
    Logo,
  },
})
export default class LayoutHeader extends Vue {
  visible: boolean = false;

  toggleVisible() {
    this.visible = !this.visible;
  }
}
</script>

<style lang="scss" scoped>
.addis-header {
  background-color: rgba($dark, 0.8);
  color: $white;
  left: 0;
  padding: 12px $spacer / 2;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;

  @include bp($sm) {
    padding: 12px $spacer;
  }

  &__inner {
    align-items: center;
    display: flex;
  }

  &__lang-switcher {
    @include bp($lg) {
      margin: 0 8px 0 0;
    }
  }

  &__wrapp {
    align-items: center;
    display: flex;
    margin: 0 0 0 auto;
  }

  &__buttons-group {
    $this: &;
    align-items: flex-end;
    background-color: $white;
    border-radius: 0 0 4px 4px;
    bottom: 0;
    display: none;
    flex-direction: column-reverse;
    padding: $spacer;
    position: absolute;
    right: 0;
    transform: translate(0, 100%);

    @include bp($lg) {
      background-color: transparent;
      border-radius: 0;
      display: flex;
      flex-direction: row;
      padding: 0;
      position: static;
      transform: none;
    }

    &.visible {
      display: flex;
    }

    &-item {
      width: 100%;

      @include bp($lg) {
        width: initial;
      }
    }

    .addis-btn {
      width: 100%;
    }
  }
}
</style>
