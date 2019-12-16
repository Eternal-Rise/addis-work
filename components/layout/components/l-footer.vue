<template>
  <footer class="addis-footer">
    <h2 class="font-weight-bold mb-2 text-capitalize">
      {{ $t('LABEL_CONTACT_US') }}
    </h2>
    <address class="addis-footer__address mb-4">
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
    <div class="addis-socials">
      <nuxt-link
        :to="{ name: 'index' }"
        :aria-label="$t('MESSAGE_INFO_LINK_FACEBOOK')"
        class="addis-socials__link"
      >
        <custom-svg-icon :width="32" :height="32" type="facebook" />
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'index' }"
        :aria-label="$t('MESSAGE_INFO_LINK_TWITTER')"
        class="addis-socials__link"
      >
        <custom-svg-icon :width="32" :height="32" type="twitter" />
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'index' }"
        :aria-label="$t('MESSAGE_INFO_LINK_INSTAGRAM')"
        class="addis-socials__link"
      >
        <custom-svg-icon :width="32" :height="32" type="instagram" />
      </nuxt-link>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomSvgIcon from '~/components/custom-svg-icon.vue';

@Component({
  components: {
    CustomSvgIcon,
  },
})
export default class LayoutFooter extends Vue {}
</script>

<style lang="scss" scoped>
.addis-footer {
  background-color: $black;
  color: $white;
  flex: 1;
  margin: auto 0 0;
  padding: $spacer * 4.6 $spacer / 2 $spacer * 5.5;
  text-align: center;

  @include bp($sm) {
    padding: $spacer * 4.9 $spacer $spacer * 6;
  }
}

.addis-socials {
  display: flex;
  justify-content: center;

  &__link {
    color: $white;
    margin: 0 $spacer / 1.5;
    transition: 0.2s;

    &:hover,
    &:focus {
      color: $primary;
    }
  }
}
</style>
