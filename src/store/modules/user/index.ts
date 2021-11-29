import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { UserState } from './types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state: UserState = {
  _id: '',
  name: '',
  email: '',
  cities: []
};

const user: Module<UserState, RootState> = {
  state,
  actions,
  mutations,
  getters
};

export default user;