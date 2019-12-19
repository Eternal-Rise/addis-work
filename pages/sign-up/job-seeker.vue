<template>
  <div>
    <l-card v-if="!isSignUpped" class="_dark _fixed-width">
      <h2 class="font-weight-bold text-center px-3">
        {{ $t('TITLE_JOB_SEEKER_SIGN_UP') }}
      </h2>

      <sign-up-indicator next-step />

      <spinner-wrapp :loading="loading">
        <b-form
          :class="loading ? '_loading' : ''"
          class="addis-form"
          @submit.prevent="handleSignUp"
        >
          <b-form-group>
            <b-form-input
              id="fullName"
              v-model="formSignUp.fullName"
              :placeholder="$t('PLACEHOLDER_FULL_NAME')"
              autofocus
              class="addis-form__input"
              required
              type="text"
            />
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="phone"
              v-model="formSignUp.phone"
              :placeholder="$t('PLACEHOLDER_PHONE')"
              class="addis-form__input"
              required
              type="tel"
            />
          </b-form-group>
          <b-form-group class="mb-5">
            <b-form-input
              id="password"
              v-model="formSignUp.password"
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
      </spinner-wrapp>
    </l-card>
    <l-card v-if="isSignUpped" class="_dark _fixed-width">
      <h2 class="font-weight-bold text-center px-3">
        {{ $t('TITLE_JOB_SEEKER_SIGN_UP_VERIFICATION') }}
      </h2>
      <spinner-wrapp :loading="loading">
        <b-form
          :class="loading ? '_loading' : ''"
          class="addis-form"
          @submit.prevent="handleVerification"
        >
          <p class="text-center">
            {{ $t('MESSAGE_INFO_JOB_SEEKER_VERIFICATION_CODE') }}
          </p>
          <div class="d-flex justify-content-center mb-1">
            <b-form-group class="mx-2" style="width: 40px">
              <b-form-input
                ref="num1"
                v-model="formVerification.num1"
                autofocus
                class="addis-form__input text-center"
                max="9"
                min="0"
                required
                type="number"
                @input.native="e => onInput(e, 2)"
                @keydown="e => onBackspace(e, 0)"
              />
            </b-form-group>
            <b-form-group class="mx-2" style="width: 40px">
              <b-form-input
                ref="num2"
                v-model="formVerification.num2"
                class="addis-form__input text-center"
                max="9"
                min="0"
                required
                type="number"
                @input.native="e => onInput(e, 3)"
                @keydown="e => onBackspace(e, 1)"
              />
            </b-form-group>
            <b-form-group class="mx-2" style="width: 40px">
              <b-form-input
                ref="num3"
                v-model="formVerification.num3"
                class="addis-form__input text-center"
                max="9"
                min="0"
                step="1"
                required
                type="number"
                @input.native="e => onInput(e, 4)"
                @keydown="e => onBackspace(e, 2)"
              />
            </b-form-group>
            <b-form-group class="mx-2" style="width: 40px">
              <b-form-input
                ref="num4"
                v-model="formVerification.num4"
                class="addis-form__input text-center"
                max="9"
                min="0"
                required
                type="number"
                @input.native="e => onInput(e, 5)"
                @keydown="e => onBackspace(e, 3)"
              />
            </b-form-group>
          </div>
          <b-button
            type="submit"
            variant="primary"
            class="addis-btn _primary addis-form__submit w-100"
          >
            {{ $t('LABEL_SUBMIT') }}
          </b-button>
        </b-form>
      </spinner-wrapp>
    </l-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import lCard from '~/components/layout/components/l-card.vue';
import SignUpIndicator from '~/components/sign-up-indicator.vue';
import SpinnerWrapp from '~/components/spinner-wrapp.vue';

interface iFormSignUp {
  fullName: string;
  password: string;
  phone: string;
}

interface iFormVerification {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  [key: string]: string;
}

@Component({
  components: {
    lCard,
    SignUpIndicator,
    SpinnerWrapp,
  },
})
export default class JobSeeker extends Vue {
  formSignUp: iFormSignUp = {
    fullName: '',
    password: '',
    phone: '',
  };

  formVerification: iFormVerification = {
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  };

  get num1() {
    return this.$refs.num1;
  }

  get num2() {
    return this.$refs.num2;
  }

  get num3() {
    return this.$refs.num3;
  }

  get num4() {
    return this.$refs.num4;
  }

  loading: boolean = false;
  isSignUpped: boolean = false;

  // TODO: ability to sing up as job seeker
  handleSignUp() {
    this.loading = true;
    setTimeout(() => {
      this.isSignUpped = true;
      this.loading = false;
    }, 200);
  }

  // TODO: verification job seeker
  handleVerification() {
    this.loading = true;
    setTimeout(() => {
      this.$router.replace({ name: 'profile' });
    }, 200);
  }

  onInput(e: any, nextField: number) {
    if (e.target && e.target.value && e.target.value.length >= 1) {
      e.target.value = e.target.value[0];

      const num = (this as any)[`num${nextField}`];

      if (num && num.focus) {
        num.focus();
      }
    }
  }

  onBackspace(e: any, prevField: number) {
    if (e.code && e.code === 'Backspace') {
      if (e.target && !e.target.value) {
        const num = (this as any)[`num${prevField}`];

        if (num && num.focus) {
          num.focus();
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
