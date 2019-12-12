// eslint-disable-next-line  no-unused-vars
import { BreadcrumbsState } from '~/types/store/breadcrumbs-state';
// eslint-disable-next-line  no-unused-vars
import { GetterTree } from 'vuex';

const getters: GetterTree<BreadcrumbsState, any> = {
  get: (state: BreadcrumbsState) => state.current,
};

export default getters;
