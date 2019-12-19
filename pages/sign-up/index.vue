<template>
  <l-card class="_dark _fixed-width">
    <h2 class="font-weight-bold text-center px-3">
      {{ $t('TITLE_SIGN_UP') }}
    </h2>
    <sign-up-indicator />
    <nuxt-link :to="{ name: 'sign-up-job-seeker' }" class="d-block mb-3 w-100">
      <b-button class="addis-btn _primary w-100" variant="primary">
        {{ $t('LABEL_JOB_SEEKER') }}
      </b-button>
    </nuxt-link>
    <nuxt-link :to="{ name: 'sign-up-employer' }" class="d-block w-100">
      <b-button class="addis-btn _outline w-100" variant="outline-primary">
        {{ $t('LABEL_EMPLOYER') }}
      </b-button>
    </nuxt-link>
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
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
