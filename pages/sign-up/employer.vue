<template>
  <l-card class="_dark _fixed-width">
    <h2 class="font-weight-bold text-center px-3">
      {{ $t('TITLE_EMPLOYER_SIGN_UP') }}
    </h2>

    <sign-up-indicator next-step />

    <b-form class="addis-form" @submit.prevent="handleSubmit">
      <b-form-group>
        <b-form-input
          :placeholder="$t('PLACEHOLDER_COMPANY_NAME')"
          class="addis-form__input"
          required
          type="text"
        />
      </b-form-group>
      <b-form-group>
        <b-form-input
          :placeholder="$t('PLACEHOLDER_EMAIL')"
          class="addis-form__input"
          required
          type="email"
        />
      </b-form-group>
      <b-form-group>
        <b-form-input
          :placeholder="$t('PLACEHOLDER_PHONE')"
          class="addis-form__input"
          required
          type="tel"
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
        {{ $t('LABEL_SIGN_UP') }}
      </b-button>
    </b-form>
  </l-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import lCard from '~/components/layout/components/l-card.vue';
import SignUpIndicator from '~/components/sign-up-indicator.vue';

@Component({
  components: {
    lCard,
    SignUpIndicator,
  },
})
export default class Employer extends Vue {
  // TODO: ability to sing up as job seeker
  handleSubmit() {
    //
  }
}
</script>

<style lang="scss" scoped></style>
