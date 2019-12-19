<template>
  <b-dropdown class="switcher" no-caret variant="link" right>
    <template slot="button-content">
      <div class="d-flex align-items-center">
        <span class="switcher__label _full">
          {{
            typeof currentLocale === 'string'
              ? currentLocale
              : currentLocale.nativeName
          }}
        </span>
        <span class="switcher__label _short">
          {{
            typeof currentLocale === 'string'
              ? currentLocale
              : currentLocale.code
          }}
        </span>
        <custom-svg-icon
          :height="7"
          :width="11"
          class="switcher__icon"
          type="dropdown-arrow"
        />
      </div>
    </template>
    <b-dropdown-item
      v-for="lang in locales"
      :key="lang.code"
      @click="setLanguage(lang.code)"
    >
      {{ lang.nativeName ? lang.nativeName : lang.code }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomSvgIcon from '~/components/custom-svg-icon.vue';

@Component({
  components: {
    CustomSvgIcon,
  },
})
export default class LanguageSwitcher extends Vue {
  public setLanguage(key: string) {
    this.$i18n.setLocale(key);
  }

  get currentLocale() {
    if (this.$i18n.locales) {
      return this.$i18n.locales.filter(locale => {
        if (typeof locale === 'string') {
          return locale === this.$i18n.locale;
        } else {
          return locale.code === this.$i18n.locale;
        }
      })[0];
    }

    return '';
  }

  get locales() {
    return this.$i18n.locales;
  }
}
</script>

<style scoped lang="scss">
.switcher {
  &__icon {
    margin: 0 0 2px 5px;
  }

  &__label {
    font-weight: 600;

    &._full {
      display: none;

      @include bp($xl) {
        display: inline;
      }
    }
    &._short {
      text-transform: uppercase;
      @include bp($xl) {
        display: none;
      }
    }
  }

  ::v-deep {
    .btn-link {
      color: $white;
      padding: $spacer - 3px $spacer / 2;
    }
  }
}
</style>
