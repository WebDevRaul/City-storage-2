import { UserState } from './modules/user/types';

export interface AuthState {
  isAuth: boolean
}

export type AppState = AuthState & UserState;
export type RootState = AuthState;