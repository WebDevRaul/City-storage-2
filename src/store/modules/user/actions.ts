import { ActionTree } from 'vuex';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { RootState } from '@/store/types';
import { UserState, SignInState, SignInResponse } from './types';
import URL from '@/store/utils/URL';

const actions: ActionTree<UserState, RootState> = {
  async signIn({ commit }, { payload, router }: SignInState):Promise<void> {
    try {
      const { data: { token } }:SignInResponse = await axios.post(`${URL}/sign-in`, payload);
      // save Token to LS
      localStorage.setItem('City-Storage', token);
      // set Axios Authorization header
      axios.defaults.headers.common.Authorization = token;
      // decode Token
      const { isAuth, user }: { isAuth: boolean, user: UserState } = jwtDecode(token);
      // commit
      commit('SET_AUTH', isAuth);
      commit('SET_USER', user);
      router.push({ name: 'signUp' });
    } catch (e) {
      console.log(e);
    }
  }
};

export default actions;