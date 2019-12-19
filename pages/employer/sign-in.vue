<template>
  <l-card class="_dark _fixed-width">
    <h2 class="font-weight-bold text-center px-3">
      {{ $t('TITLE_EMPLOYER_SIGN_IN') }}
    </h2>
    <p class="mb-4 mb-lg-3 text-center">
      {{ $t('MESSAGE_INFO_EMPLOYER_SIGN_IN') }}
    </p>

    <b-form class="addis-form" @submit.prevent="handleSubmit">
      <b-form-group>
        <b-form-input
          :placeholder="$t('PLACEHOLDER_EMAIL')"
          class="addis-form__input"
          required
          type="email"
        />
      </b-form-group>
      <b-form-group class="mb-5">
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
        class="addis-btn _primary addis-form__submit w-100"
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
            :to="{ name: 'employer-password-forgot' }"
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
import lCard from '~/components/layout/components/l-card.vue';

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
.addis-form {
  &__submit {
    margin-bottom: $spacer / 1.25;
  }
}
</style>
