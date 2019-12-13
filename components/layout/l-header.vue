<template>
  <header class="addis-header">
    <logo />
    <div class="addis-header__wrapp">
      <lang-switcher class="addis-header__lang-switcher" />
      <b-button variant="outline-primary" class="addis-btn">
        {{ $t('LABEL_SIGN_UP') }}
      </b-button>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LangSwitcher from '~/components/lang-switcher.vue';
import Logo from '~/components/logo.vue';

@Component({
  components: {
    LangSwitcher,
    Logo,
  },
})
export default class LayoutHeader extends Vue {}
</script>

<style lang="scss" scoped>
.addis-header {
  align-items: center;
  background-color: rgba($dark, 0.8);
  color: $white;
  display: flex;
  left: 0;
  padding: 12px 20px;
  position: absolute;
  right: 0;
  top: 0;

  &__wrapp {
    margin: 0 0 0 auto;
  }

  // &__lang-switcher {
  //   margin: 0 20px 0 0;
  // }
}
</style>
