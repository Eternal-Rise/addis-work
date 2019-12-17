<template>
  <l-card>
    <h2 class="font-weight-bold mb-1 text-center">
      {{ $t('TITLE_PASSWORD_FORGOT') }}
    </h2>
    <p class="login__description text-center">
      {{ $t('MESSAGE_INFO_PASSWORD_FORGOT_EMPLOYER') }}
    </p>

    <b-form class="addis-form" @submit.prevent="handleSubmit">
      <b-form-group class="mb-4">
        <b-form-input
          :placeholder="$t('PLACEHOLDER_EMAIL')"
          class="addis-form__input"
          required
          type="email"
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        class="addis-btn _primary mb-2 w-100"
      >
        {{ $t('LABEL_SEND') }}
      </b-button>
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
  layout: 'hero',
})
export default class Forgot extends Vue {
  // TODO: ability to login
  handleSubmit() {
    //
  }
}
</script>

<style lang="scss" scoped></style>
