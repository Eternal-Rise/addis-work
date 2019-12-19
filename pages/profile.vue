<template>
  <div>
    <l-card
      v-if="subscriptionNotifierVisible"
      class="notifier _accent _fixed-width mb-4 pt-3"
    >
      <h4 class="font-weight-bold mb-2">
        {{ $t('TITLE_SUBSCRIPTION') }}
      </h4>
      <p class="notifier__description">
        {{ $t('MESSAGE_INFO_SUBSCRIPTION') }}
      </p>
      <b-button class="addis-btn _light w-100">
        {{ $t('LABEL_SUBSCRIPTION_BUTTON') }}
      </b-button>
      <b-button
        class="addis-btn _light notifier__btn-close"
        @click="subscriptionNotifierVisible = false"
      >
        <custom-svg-icon width="16" height="16" type="times" />
      </b-button>
    </l-card>

    <l-card class="mb-5">
      <h4 class="font-weight-bold mb-3">
        {{ $t('TITLE_GREETINGS', { userName: 'Manuel' }) }}
      </h4>

      <b-form class="addis-form _fixed-width">
        <b-form-group
          :label="$t('LABEL_SELECT_JOB_CATEGORIES')"
          class="categories"
        >
          <input
            id="categories-switcher"
            class="categories__switcher"
            type="checkbox"
          />
          <label
            for="categories-switcher"
            tabindex="0"
            :class="!form.categories.length ? '_has-placeholder' : ''"
            class="categories__switcher-label custom-select"
          >
            <template v-if="!form.categories.length">
              {{ $t('PLACEHOLDER_SELECT') }}
            </template>
            <template v-else>
              <span
                v-for="(category, index) of form.categories"
                :key="index"
                class="categories__selected-items"
              >
                {{
                  $t(`LABEL_CATEGORY_${category.category}_${category.title}`)
                }}
                {{ index < form.categories.length - 1  ? ',' : '' }}
              </span>
            </template>
          </label>
          <div class="categories__list">
            <div v-for="(category, i) of categories" :key="i">
              <div class="col-form-label">
                {{ $t(`LABEL_CATEGORY_${category.title}`) }}
              </div>
              <b-form-checkbox-group v-model="form.categories" stacked>
                <b-form-checkbox
                  v-for="(subCategory, j) of category.list"
                  :key="j"
                  :value="{ category: category.title, title: subCategory }"
                >
                  {{ $t(`LABEL_CATEGORY_${category.title}_${subCategory}`) }}
                </b-form-checkbox>
              </b-form-checkbox-group>
            </div>
          </div>
        </b-form-group>

        <b-form-group :label="$t('LABEL_SMS_LANGUAGE_SETTINGS')">
          <b-form-radio-group v-model="form.smsLang" stacked>
            <b-form-radio
              v-for="lang in locales"
              :key="lang.code"
              :value="lang.code"
            >
              {{ lang.nativeName ? lang.nativeName : lang.code }}
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <div class="col-form-label">
          {{ $t('LABEL_WORK_EXPERIENCE') }}
        </div>

        <b-form-group>
          <b-form-checkbox
            v-model="form.workExperience"
            :unchecked-value="true"
            :value="false"
            @change="toggleWorkExpirience"
          >
            {{ $t('LABEL_HAVE_NOT_WORK_EXPERIENCE') }}
          </b-form-checkbox>
        </b-form-group>

        <div v-if="form.workExperience">
          <div
            v-for="(workPlace, i) of form.workPlaces"
            :key="`workplace-${i}`"
            class="inc-fields"
          >
            <b-form-group class="mb-3">
              <b-form-input
                v-model.trim="workPlace.companyName"
                :disabled="!form.workExperience"
                :placeholder="$t('PLACEHOLDER_COMPANY_NAME')"
                type="text"
              />
            </b-form-group>

            <b-form-group class="mb-3">
              <b-form-input
                v-model.trim="workPlace.position"
                :placeholder="$t('PLACEHOLDER_POSITION')"
                type="text"
              />
            </b-form-group>

            <div class="d-flex">
              <b-form-group class="mb-3 w-50" style="margin-right: 8px;">
                <b-form-select
                  v-model="workPlace.startMonth"
                  :class="!workPlace.startMonth ? '_has-placeholder' : ''"
                >
                  <option :value="null">
                    {{ $t('PLACEHOLDER_SELECT_START_MONTH') }}
                  </option>
                  <option
                    v-for="(month, j) of months"
                    :key="`start-month-${j}`"
                    :value="month"
                  >
                    {{ $t(`LABEL_MONTH_${month}`) }}
                  </option>
                </b-form-select>
              </b-form-group>

              <b-form-group class="mb-3 w-50" style="margin-left: 8px;">
                <b-form-select
                  v-model="workPlace.startYear"
                  :class="!workPlace.startYear ? '_has-placeholder' : ''"
                >
                  <option :value="null">
                    {{ $t('PLACEHOLDER_SELECT_START_YEAR') }}
                  </option>
                  <option
                    v-for="(year, j) of years"
                    :key="`start-year-${j}`"
                    :value="year"
                  >
                    {{ year }}
                  </option>
                </b-form-select>
              </b-form-group>
            </div>

            <div class="d-flex">
              <b-form-group class="mb-3 w-50" style="margin-right: 8px;">
                <b-form-select
                  v-model="workPlace.endMonth"
                  :disabled="
                    form.currentWorkplace && i === form.workPlaces.length - 1
                  "
                  :class="!workPlace.endMonth ? '_has-placeholder' : ''"
                >
                  <option :value="null">
                    {{ $t('PLACEHOLDER_SELECT_END_MONTH') }}
                  </option>
                  <option
                    v-for="(month, j) of months"
                    :key="`end-montj-${j}`"
                    :value="month"
                  >
                    {{ $t(`LABEL_MONTH_${month}`) }}
                  </option>
                </b-form-select>
              </b-form-group>

              <b-form-group class="mb-3 w-50" style="margin-left: 8px;">
                <b-form-select
                  v-model="workPlace.endYear"
                  :disabled="
                    form.currentWorkplace && i === form.workPlaces.length - 1
                  "
                  :class="!workPlace.endYear ? '_has-placeholder' : ''"
                >
                  <option :value="null">
                    {{ $t('PLACEHOLDER_SELECT_END_YEAR') }}
                  </option>
                  <option
                    v-for="(year, j) of years"
                    :key="`end-year-${j}`"
                    :value="year"
                  >
                    {{ year }}
                  </option>
                </b-form-select>
              </b-form-group>
            </div>

            <b-button
              v-if="form.workPlaces.length > 1"
              class="btn-inc"
              variant="link"
              @click="removeFields('workplace', i)"
            >
              <span class="btn-inc__icon">
                <span class="bar"></span>
              </span>
              <span class="btn-inc__text">
                {{ $t('LABEL_REMOVE') }}
              </span>
            </b-button>
          </div>
        </div>

        <b-form-group v-if="form.workExperience">
          <b-form-checkbox
            v-model="form.currentWorkplace"
            :unchecked-value="false"
            :value="true"
            @change="toggleCurrentWorkplace"
          >
            {{ $t('LABEL_CURRENT_WORKPLACE') }}
          </b-form-checkbox>
        </b-form-group>

        <b-button
          v-if="form.workExperience"
          :disabled="form.currentWorkplace || isWorkplaceFilled"
          class="btn-inc"
          variant="link"
          @click="() => addFields('workplace')"
        >
          <span class="btn-inc__icon">
            <custom-svg-icon
              height="14"
              type="plus"
              view-box="0 0 14 14"
              width="14"
            />
          </span>
          <span class="btn-inc__text">
            {{ $t('LABEL_ADD_MORE_WORK_EXPERIENCE') }}
          </span>
        </b-button>

        <div class="col-form-label">
          {{ $t('LABEL_CERTIFICATES') }}
        </div>

        <div
          v-for="(certificate, i) of form.certificates"
          :key="`certificate-${i}`"
          class="inc-fields"
        >
          <b-form-group>
            <b-form-input
              v-model.trim="certificate.title"
              :placeholder="$t('PLACEHOLDER_CERTIFICATE')"
              type="text"
            />
          </b-form-group>
          <b-form-group style="width: calc(50% - 8px);">
            <b-form-select
              v-model="certificate.year"
              :class="!certificate.year ? '_has-placeholder' : ''"
            >
              <option :value="null">
                {{ $t('PLACEHOLDER_CERTIFICATE_YEAR') }}
              </option>
              <option v-for="(year, j) of years" :key="j" :value="year">
                {{ year }}
              </option>
            </b-form-select>
          </b-form-group>
          <b-button
            v-if="form.certificates.length > 1"
            class="btn-inc"
            variant="link"
            @click="removeFields('certificate', i)"
          >
            <span class="btn-inc__icon">
              <span class="bar"></span>
            </span>
            <span class="btn-inc__text">
              {{ $t('LABEL_REMOVE') }}
            </span>
          </b-button>
        </div>
        <b-button
          :disabled="isCertificateFilled"
          class="btn-inc"
          variant="link"
          @click="() => addFields('certificate')"
        >
          <span class="btn-inc__icon">
            <custom-svg-icon
              height="14"
              type="plus"
              view-box="0 0 14 14"
              width="14"
            />
          </span>
          <span class="btn-inc__text">
            {{ $t('LABEL_ADD_MORE_CERTIFICATES') }}
          </span>
        </b-button>

        <div class="col-form-label">
          {{ $t('LABEL_EDUCATION') }}
        </div>

        <div
          v-for="(education, i) of form.educations"
          :key="`education-${i}`"
          class="inc-fields"
        >
          <b-form-group>
            <b-form-input
              v-model.trim="education.title"
              :placeholder="$t('PLACEHOLDER_EDUCATION_INSTITUTE')"
              type="text"
            />
          </b-form-group>

          <b-form-group>
            <b-form-input
              v-model.trim="education.degree"
              :placeholder="$t('PLACEHOLDER_EDUCATION_DEGREE')"
              type="text"
            />
          </b-form-group>

          <b-form-group>
            <b-form-input
              v-model.trim="education.specialization"
              :placeholder="$t('PLACEHOLDER_EDUCATION_SPECIALIZATION')"
              type="text"
            />
          </b-form-group>

          <div class="d-flex">
            <b-form-group class="mb-3 w-50" style="margin-right: 8px;">
              <b-form-select
                v-model="education.startYear"
                :class="!education.startYear ? '_has-placeholder' : ''"
              >
                <option :value="null">
                  {{ $t('PLACEHOLDER_SELECT_START_YEAR') }}
                </option>
                <option
                  v-for="(year, j) of years"
                  :key="`start-year-${j}`"
                  :value="year"
                >
                  {{ year }}
                </option>
              </b-form-select>
            </b-form-group>

            <b-form-group class="mb-3 w-50" style="margin-left: 8px;">
              <b-form-select
                v-model="education.endYear"
                :class="!education.endYear ? '_has-placeholder' : ''"
              >
                <option :value="null">
                  {{ $t('PLACEHOLDER_SELECT_END_YEAR') }}
                </option>
                <option
                  v-for="(year, j) of years"
                  :key="`end-year-${j}`"
                  :value="year"
                >
                  {{ year }}
                </option>
              </b-form-select>
            </b-form-group>
          </div>

          <b-button
            v-if="form.educations.length > 1"
            class="btn-inc"
            variant="link"
            @click="removeFields('education', i)"
          >
            <span class="btn-inc__icon">
              <span class="bar"></span>
            </span>
            <span class="btn-inc__text">
              {{ $t('LABEL_REMOVE') }}
            </span>
          </b-button>
        </div>

        <b-button
          :disabled="isEducationFilled"
          class="btn-inc"
          variant="link"
          @click="() => addFields('education')"
        >
          <span class="btn-inc__icon">
            <custom-svg-icon
              width="14"
              height="14"
              view-box="0 0 14 14"
              type="plus"
            />
          </span>
          <span class="btn-inc__text">
            {{ $t('LABEL_ADD_MORE_EDUCATION') }}
          </span>
        </b-button>

        <b-form-group :label="$t('LABEL_ATTACH_CV')">
          <!-- <input type="file" id="cv" class="d-none" :accept="acceptCV"> -->
          <b-form-file id="cv" :accept="acceptCV" class="d-none" />
          <label for="cv" class="addis-btn _outline btn-upload" tabindex="0">
            {{ $t('LABEL_UPLOAD') }}
          </label>
        </b-form-group>

        <b-form-group :label="$t('LABEL_ATTACH_RELEVANT_DOCUMENTS')">
          <b-form-file
            id="docs"
            :accept="acceptRelevantDocuments"
            class="d-none"
          />
          <label for="docs" class="addis-btn _outline btn-upload" tabindex="0">
            {{ $t('LABEL_UPLOAD') }}
          </label>
        </b-form-group>

        <b-form-group :label="$t('LABEL_ATTACH_PHOTO')">
          <b-form-file id="photo" :accept="acceptPhoto" class="d-none" />
          <label for="photo" class="addis-btn _outline btn-upload" tabindex="0">
            {{ $t('LABEL_UPLOAD') }}
          </label>
        </b-form-group>

        <b-button
          class="addis-btn _primary mb-3  w-100"
          type="submit"
          variant="primary"
        >
          {{ $t('LABEL_SAVE') }}
        </b-button>

        <b-button
          class="addis-btn _outline w-100"
          type="button"
          variant="outline"
        >
          {{ $t('LABEL_DISCARD') }}
        </b-button>
      </b-form>
    </l-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import lCard from '~/components/layout/components/l-card.vue';
import CustomSvgIcon from '~/components/custom-svg-icon.vue';

import categories from '~/assets/test-data/categories';

// TODO: improve interfaces
interface iCertificate {
  title?: string;
  year?: string | null;
}

interface iEducation {
  institute?: string;
  degree?: string;
  specialization?: string;
  startYear?: string | null;
  endYear?: string | null;
}

interface iWorkplace {
  companyName?: string;
  position?: string;
  startMonth?: string | null;
  startYear?: string | null;
  endMonth?: string | null;
  endYear?: string | null;
}

interface iForm {
  categories: string[];
  certificates: iCertificate[];
  educations: iEducation[];
  currentWorkplace: boolean;
  smsLang: string;
  workExperience: boolean;
  workPlaces: iWorkplace[];
}

@Component({
  breadcrumb: 'LABEL_PROFILE',
  components: {
    lCard,
    CustomSvgIcon,
  },
})
export default class Profile extends Vue {
  acceptCV: string = [
    'application/pdf', // .pdf
    'application/msword', // .doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'application/vnd.oasis.opendocument.text', // .odt
  ].join(', ');

  acceptRelevantDocuments: string = [
    'application/pdf', // .pdf
    'application/msword', // .doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'application/vnd.oasis.opendocument.text', // .odt
  ].join(', ');

  acceptPhoto: string = ['image/jpg', 'image/jpeg', 'image/png'].join(', ');

  categories: any[] = categories;

  subscriptionNotifierVisible: boolean = true;

  defaultCertificate: iCertificate = {
    title: '',
    year: null,
  };

  defaultEducation: iEducation = {
    institute: '',
    degree: '',
    specialization: '',
    startYear: null,
    endYear: null,
  };

  defaultWorkplace: iWorkplace = {
    companyName: '',
    position: '',
    startMonth: null,
    startYear: null,
    endMonth: null,
    endYear: null,
  };

  form: iForm = {
    categories: [],
    certificates: [{ ...this.defaultCertificate }],
    educations: [{ ...this.defaultEducation }],
    currentWorkplace: false,
    smsLang: '',
    workExperience: true,
    workPlaces: [{ ...this.defaultWorkplace }],
  };

  months: string[] = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];

  currentYear: number = new Date().getFullYear();
  years: number[] = [this.currentYear];

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

  get isCertificateFilled(): boolean {
    const lastCertificate = this.form.certificates[
      this.form.certificates.length - 1
    ];

    if (lastCertificate.title && lastCertificate.year) return false;
    else return true;
  }

  get isEducationFilled(): boolean {
    const lastEducation = this.form.educations[this.form.educations.length - 1];

    if (
      lastEducation.institute &&
      lastEducation.degree &&
      lastEducation.specialization &&
      lastEducation.startYear &&
      lastEducation.endYear
    ) {
      return false;
    } else return true;
  }

  get isWorkplaceFilled(): boolean {
    const lastWorkplace = this.form.workPlaces[this.form.workPlaces.length - 1];

    if (
      lastWorkplace.companyName &&
      lastWorkplace.position &&
      lastWorkplace.startMonth &&
      lastWorkplace.startYear &&
      lastWorkplace.endMonth &&
      lastWorkplace.endYear
    ) {
      return false;
    } else return true;
  }

  addFields(key: string) {
    switch (key) {
      case 'certificate':
        this.form.certificates.push({ ...this.defaultCertificate });
        break;

      case 'education':
        this.form.educations.push({ ...this.defaultEducation });
        break;

      case 'workplace':
        this.form.workPlaces.push({ ...this.defaultWorkplace });
        break;
    }
  }

  removeFields(key: string, i: number) {
    switch (key) {
      case 'certificate':
        this.form.certificates.splice(i, 1);
        break;

      case 'education':
        this.form.educations.splice(i, 1);
        break;

      case 'workplace':
        this.form.workPlaces.splice(i, 1);
        break;
    }
  }

  toggleWorkExpirience(val: boolean) {
    if (!val) {
      this.form.workPlaces = [{ ...this.defaultWorkplace }];
    }
  }

  toggleCurrentWorkplace(val: boolean) {
    if (val) {
      const lastWorkplace = this.form.workPlaces[
        this.form.workPlaces.length - 1
      ];

      lastWorkplace.endMonth = null;
      lastWorkplace.endYear = null;
    }
  }

  created() {
    // Fill years array
    (() => {
      let year = this.currentYear;
      while (this.currentYear - 60 < year) {
        year--;
        this.years.push(year);
      }
    })();
  }

  mounted() {
    if (typeof this.currentLocale !== 'string') {
      this.form.smsLang = this.currentLocale && this.currentLocale.code;
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  background-color: $primary;
  display: block;
  height: 1px;
  width: 10px;
}

.btn-upload {
  border-radius: 4px;
  border: 1px solid $primary;
  text-align: center;
  width: calc(50% - 8px);
}

.btn-inc {
  align-items: center;
  color: $primary;
  display: flex;
  font-weight: 600;
  margin-bottom: $spacer * 1.5;
  padding: 0;
  text-decoration: none;
  transition: 0.2s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    color: $gray-500;
  }

  &__icon {
    margin: 0 $spacer / 2 1px 0;
  }

  &__text {
    text-decoration: underline;
  }
}

.categories {
  $this: &;
  &__switcher {
    display: none;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding:0;
    border:0;
    height: 1px;
    width: 1px;
    overflow: hidden;

    &:checked ~ #{$this}__list {
      display: block;
    }
  }

  // &__switcher-label {
  // }

  &__list {
    display: none;
  }
}

.notifier {
  position: relative;
  &__btn-close {
    position: absolute;
    top: $spacer / 2;
    width: 32px;
    height: 32px;
    padding: 0;
    right: $spacer / 2;

    @include bp($sm) {
      top: $spacer;
      right: $spacer;
    }
  }

  &__description {
    font-size: $font-size-sm;
  }
}
</style>
