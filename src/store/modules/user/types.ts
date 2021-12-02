import { Router } from 'vue-router';

interface City {
  name: string
  code: string
}

interface UserState {
  _id: string
  name: string
  email: string
  cities: City[]
}

interface SignInState {
  payload: {
    email: string,
    password: string
  }
  router: Router
}

interface SignInResponse {
  data: {
    token: string
  }
}

export { UserState, SignInState, SignInResponse };