// eslint-disable-next-line  no-unused-vars
import { BreadcrumbsState } from '~/types/store/breadcrumbs-state';
// eslint-disable-next-line  no-unused-vars
import { MutationTree } from 'vuex';
// eslint-disable-next-line  no-unused-vars
import { Breadcrumb } from '~/types/breadcrumb';

const mutations: MutationTree<BreadcrumbsState> = {
  set(state: BreadcrumbsState, payload: Breadcrumb[]) {
    state.current = payload;
  },
  add(state: BreadcrumbsState, payload: Breadcrumb) {
    state.current.push(payload);
  },
};

export default mutations;
