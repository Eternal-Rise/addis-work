<template>
  <footer class="addis-footer">
    <h3 class="addis-footer__title">
      {{ $t('LABEL_CONTACT_US') }}
    </h3>
    <address class="addis-footer__address">
      <p class="addis-footer__address-item">
        {{ $t('LABEL_CONTACT_LOCATION') }}
      </p>
      <p class="addis-footer__address-item">
        {{ $t('LABEL_CONTACT_OFFICE') }}
      </p>
      <p class="addis-footer__address-item">
        {{ $t('LABEL_CONTACT_PHONE_1') }}
      </p>
      <p class="addis-footer__address-item">
        {{ $t('LABEL_CONTACT_PHONE_2') }}
      </p>
      <p class="addis-footer__address-item">
        {{ $t('LABEL_CONTACT_PHONE_3') }}
      </p>
    </address>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LayoutFooter extends Vue {}
</script>

<style lang="scss" scoped>
.addis-footer {
  background-color: $black;
  color: $white;
  margin: auto 0 0;
  padding: $spacer * 5 $spacer;
  text-align: center;

  &__title {
    font-weight: 600;
  }
}
</style>
