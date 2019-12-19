<template>
  <l-card class="_dark _fixed-width">
    <h2 class="font-weight-bold mb-1 text-center px-3">
      {{ $t('TITLE_PASSWORD_FORGOT') }}
    </h2>
    <p v-if="!submitted" class="login__description text-center">
      {{ $t('MESSAGE_INFO_PASSWORD_FORGOT_JOB_SEEKER') }}
    </p>
    <p
      v-if="submitted"
      class="login__description text-center"
      v-html="$t('MESSAGE_INFO_PASSWORD_FORGOT_JOB_SEEKER_SENT')"
    ></p>
    <spinner-wrapp v-if="!submitted" :loading="loading">
      <b-form
        :class="loading ? '_loading' : ''"
        class="addis-form"
        @submit.prevent="handleSubmit"
      >
        <b-form-group class="mb-4">
          <b-form-input
            id="phone"
            v-model="form.phone"
            :placeholder="$t('PLACEHOLDER_PHONE')"
            class="addis-form__input"
            required
            type="tel"
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
    </spinner-wrapp>
  </l-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import lCard from '~/components/layout/components/l-card.vue';
import SpinnerWrapp from '~/components/spinner-wrapp.vue';

interface iForm {
  phone: string;
}

@Component({
  components: {
    lCard,
    SpinnerWrapp,
  },
  layout: 'hero',
})
export default class Forgot extends Vue {
  form: iForm = {
    phone: '',
  };
  loading: boolean = false;
  submitted: boolean = false;

  // TODO: ability to login
  handleSubmit() {
    this.loading = true;

    setTimeout(() => {
      this.submitted = true;
    }, 200);
  }
}
</script>

<style lang="scss" scoped></style>
