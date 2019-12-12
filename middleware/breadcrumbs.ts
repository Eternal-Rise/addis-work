// eslint-disable-next-line no-unused-vars
import { Context } from '@nuxt/types';

export default function(ctx: Context) {
  ctx.app.$breadcrumb.set();
}
