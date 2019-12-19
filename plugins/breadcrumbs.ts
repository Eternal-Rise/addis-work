// eslint-disable-next-line no-unused-vars
import { Plugin } from '@nuxt/types';
// eslint-disable-next-line no-unused-vars
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import { Component, RawLocation } from 'vue-router/types/router';
// eslint-disable-next-line no-unused-vars
import { Breadcrumb } from '~/types/breadcrumb';
// eslint-disable-next-line  no-unused-vars
import { Context } from '@nuxt/types';

declare type ComponentWithOptions = Component & {
  options: { [key: string]: any };
};

declare module 'vue/types/vue' {
  interface Vue {
    $breadcrumb: BreadcrumbsPlugin;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    breadcrumb?: string | ((ctx: Context) => string);
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $breadcrumb: BreadcrumbsPlugin;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $breadcrumb: BreadcrumbsPlugin;
  }
}

class BreadcrumbsPlugin {
  context!: Context;

  constructor(context: Context) {
    this.context = context;
  }

  set(): void {
    const breadcrumbs: Breadcrumb[] = [];

    breadcrumbs.push({ title: 'LABEL_HOME_PAGE', to: { name: 'index' } });

    const router = this.context.app.router;

    this.context.route.matched.forEach(value => {
      const to: RawLocation = {};

      if (router) {
        to.name = router.resolve(value.path).resolved.name;
        to.params = this.context.route.params;
      } else {
        to.path = value.path;
      }

      if (value && value.instances && value.instances.default) {
        const component = value.instances.default;

        if (component.$options && component.$options.breadcrumb) {
          const breadcrumb = component.$options.breadcrumb;
          let title = '';

          if (typeof breadcrumb === 'function') {
            title = breadcrumb(this.context);
          } else {
            title = breadcrumb;
          }

          breadcrumbs.push({
            to,
            title,
          });
        }
      } else if (value && value.components && value.components.default) {
        const component: ComponentWithOptions = value.components
          .default as ComponentWithOptions;

        if (component.options && component.options.breadcrumb) {
          const breadcrumb = component.options.breadcrumb;
          let title = '';

          if (typeof breadcrumb === 'function') {
            title = breadcrumb(this.context);
          } else {
            title = breadcrumb;
          }

          breadcrumbs.push({
            to,
            title,
          });
        }
      }
    });

    this.context.store.dispatch('breadcrumbs/set', breadcrumbs);
  }

  add(b: Breadcrumb): void {
    this.context.store.dispatch('breadcrumbs/add', b);
  }
}

const breadcrumb: Plugin = (context, inject) => {
  inject('breadcrumb', new BreadcrumbsPlugin(context));
};

export default breadcrumb;
