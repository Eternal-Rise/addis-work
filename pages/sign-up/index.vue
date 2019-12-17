<template>
  <l-card>
    <h2>
      {{ $t('TITLE_SIGN_UP') }}
    </h2>
    <nuxt-link :to="{ name: 'index' }" class="d-block mb-3 w-100">
      <b-button class="addis-btn _primary w-100" variant="primary">
        {{ $t('LABEL_JOB_SEEKER') }}
      </b-button>
    </nuxt-link>
    <nuxt-link :to="{ name: 'index' }" class="d-block w-100">
      <b-button class="addis-btn w-100" variant="outline-primary">
        {{ $t('LABEL_EMPLOYER') }}
      </b-button>
    </nuxt-link>
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
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
