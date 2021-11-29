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
  email: string,
  password: string
}

interface SignInResponse {
  data: {
    token: string
  }
}

export { UserState, SignInState, SignInResponse };