import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import user from './modules/user';

const store: StoreOptions<RootState> = {
  state: {
    isAuth: false
  },
  mutations: {
    SET_AUTH(state, isAuth: boolean) {
      state.isAuth = isAuth;
    }
  },
  modules: {
    user
  }
};

export default new Vuex.Store<RootState>(store);