<template>
  <div>
    <input
      id="menu-toggler"
      v-model="isActive"
      class="d-none"
      type="checkbox"
    />
    <label for="menu-toggler" class="py-1 d-lg-none" style="margin: 0 0 2px">
      <hamburger :class="isActive ? '_active' : ''" />
    </label>
    <div :class="isActive ? '_visible' : ''" class="buttons-group">
      <nuxt-link
        :to="{ name: 'employer-sign-in' }"
        class="mr-lg-3 buttons-group__item"
      >
        <b-button class="addis-btn _primary" variant="primary">
          {{ $t('LABEL_SIGN_IN_EMPLOYER') }}
        </b-button>
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'sign-up' }"
        class="buttons-group__item mb-3 mb-lg-0"
      >
        <b-button class="addis-btn _outline" variant="outline-primary">
          {{ $t('LABEL_SIGN_UP') }}
        </b-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Hamburger from '~/components/hamburger.vue';

@Component({
  components: {
    Hamburger,
  },
})
export default class HeaderButtons extends Vue {
  isActive: boolean = false;

  @Watch('$route')
  onProperyChange() {
    this.isActive = false;
  }
}
</script>

<style lang="scss" scoped>
.buttons-group {
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

  &._visible {
    display: flex;
  }

  &__item {
    width: 100%;

    @include bp($lg) {
      width: initial;
    }
  }

  .addis-btn {
    width: 100%;
  }
}
</style>
