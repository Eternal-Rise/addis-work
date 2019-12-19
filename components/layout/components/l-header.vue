<template>
  <header class="addis-header">
    <div class="inner addis-header__inner">
      <logo />
      <div class="addis-header__wrapp">
        <lang-switcher class="addis-header__lang-switcher" />
        <header-buttons />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderButtons from '~/components/header-buttons.vue';
import LangSwitcher from '~/components/lang-switcher.vue';
import Logo from '~/components/logo.vue';

@Component({
  components: {
    HeaderButtons,
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
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;

  &__inner {
    align-items: center;
    padding: 3px $spacer;
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
}
</style>
