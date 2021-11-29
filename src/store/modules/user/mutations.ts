import { MutationTree } from 'vuex';
import { UserState } from './types';

const mutations: MutationTree<UserState> = {
  SET_USER(state, { _id, name, email, cities }: UserState) {
    state._id = _id;
    state.name = name;
    state.email = email;
    state.cities = cities;
  }
};

export default mutations;