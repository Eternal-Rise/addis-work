// eslint-disable-next-line  no-unused-vars
import { BreadcrumbsState } from '~/types/store/breadcrumbs-state';
// eslint-disable-next-line  no-unused-vars
import { ActionTree, ActionContext } from 'vuex';
// eslint-disable-next-line  no-unused-vars
import { Breadcrumb } from '~/types/breadcrumb';

export interface Actions<S, R> extends ActionTree<S, R> {
  set(context: ActionContext<S, R>, payload: Breadcrumb[]): void;
  add(context: ActionContext<S, R>, payload: Breadcrumb): void;
}

const actions: Actions<BreadcrumbsState, any> = {
  set(
    context: ActionContext<BreadcrumbsState, any>,
    payload: Breadcrumb[],
  ): void {
    context.commit('set', payload);
  },
  add(
    context: ActionContext<BreadcrumbsState, any>,
    payload: Breadcrumb,
  ): void {
    context.commit('add', payload);
  },
};

export default actions;
