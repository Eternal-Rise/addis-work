<template>
  <l-card class="login">
    <h4 class="font-weight-bold mb-3 text-center">
      {{ $t('TITLE_LANDING_SIGN_IN') }}
    </h4>
    <p class="login__description text-center mb-3">
      {{ $t('MESSAGE_INFO_LANDING_SIGN_IN') }}
    </p>

    <b-form class="addis-form" @submit.prevent="handleSubmit">
      <b-form-group>
        <b-form-input
          :placeholder="$t('PLACEHOLDER_PHONE')"
          class="addis-form__input"
          required
          type="tel"
        />
      </b-form-group>
      <b-form-group class="mb-4">
        <b-form-input
          :placeholder="$t('PLACEHOLDER_PASSWORD')"
          class="addis-form__input"
          required
          type="password"
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        class="addis-btn _primary mb-2 w-100"
      >
        {{ $t('LABEL_SIGN_IN') }}
      </b-button>

      <b-row class="align-items-center justify-content-between">
        <b-col class="col-auto">
          <b-form-group class="m-0">
            <b-form-checkbox class="addis-form__checkbox">
              {{ $t('LABEL_REMEMBER_ME') }}
            </b-form-checkbox>
          </b-form-group>
        </b-col>
        <b-col class="col-auto">
          <nuxt-link
            :to="{ name: 'index' }"
            class="addis-form__link font-weight-bold"
          >
            {{ $t('LABEL_PASSWORD_FORGOT') }}
          </nuxt-link>
        </b-col>
      </b-row>
    </b-form>
  </l-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import lCard from '~/components/layout/l-card.vue';

@Component({
  components: {
    lCard,
  },
})
export default class LandingLogin extends Vue {
  // TODO: ability to login
  handleSubmit() {
    //
  }
}
</script>

<style lang="scss" scoped>
.login {
  &__description {
    font-size: $font-size-sm;
  }
}

.addis-form {
  &__checkbox {
    font-size: $font-size-xs;
    padding-left: 1.2rem;

    &.custom-control {
      min-height: initial;
    }

    ::v-deep {
      .custom-control-input {
        &:checked ~ .custom-control-label {
          &::before {
            background-color: $primary;
          }
        }
      }
      .custom-control-label {
        &::before,
        &::after {
          border-radius: 0;
          height: 14px;
          left: -1.2rem;
          top: 45%;
          transform: translateY(-50%);
          width: 14px;
        }

        &::before {
          background-color: transparent;
        }
      }
    }
  }

  &__input,
  &__link {
    font-size: $font-size-sm;
  }
}
</style>
