<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox || `0 0 ${width} ${height}`"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-for="(data, index) in icons[type]"
      :key="index"
      :d="data.d"
      v-bind="data && data.options"
    />
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CustomSvgIcon extends Vue {
  @Prop({
    type: [Number, String],
    required: true,
    validator: (val: string | number) => {
      if (typeof val === 'string') {
        return !Number.isNaN(Number.parseInt(val));
      } else if (typeof val === 'number') {
        return true;
      }

      return false;
    },
  })
  readonly width!: number | string;

  @Prop({
    type: [Number, String],
    required: true,
    validator: (val: string | number) => {
      if (typeof val === 'string') {
        return !Number.isNaN(Number.parseInt(val));
      } else if (typeof val === 'number') {
        return true;
      }

      return false;
    },
  })
  readonly height!: number | string;

  @Prop({ required: false, type: String })
  readonly viewBox!: string;

  @Prop({ required: true, type: String })
  readonly type!: string;

  /* eslint-disable prettier/prettier */
  icons: { [key: string]: any[] } = {
    'dropdown-arrow': [
      {
        d: 'M9.95937 1.76503L9.95937 1.76504L9.95999 1.76439C10.0513 1.66797 10.1 1.54895 10.1 1.42762C10.1 1.26562 10.0147 1.11289 9.86493 1.01134L9.86493 1.01134L9.86446 1.01102C9.60609 0.837972 9.22934 0.869469 9.01667 1.09022C9.01665 1.09023 9.01664 1.09025 9.01663 1.09026L5.49018 4.74682L1.98363 1.10885C1.98362 1.10884 1.98361 1.10883 1.98361 1.10882C1.77094 0.888054 1.39418 0.85655 1.13579 1.0296C1.00384 1.11798 0.922176 1.24663 0.903888 1.38641C0.885537 1.52664 0.932189 1.66979 1.04083 1.78259L1.04085 1.7826L5.01787 5.90963C5.01791 5.90968 5.01795 5.90972 5.018 5.90977C5.13544 6.03269 5.31057 6.1 5.48899 6.1C5.66889 6.1 5.84255 6.0325 5.96086 5.91007L5.96092 5.91L9.95937 1.76503Z',
        options: {
          'stroke-width': 0.2,
        },
      },
    ],
  };
}
</script>
