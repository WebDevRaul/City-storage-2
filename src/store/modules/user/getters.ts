import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { UserState } from './types';

const getters: GetterTree<UserState, RootState> = {
  GET_USER(state): string {
    return state.name;
  }
};

export default getters;