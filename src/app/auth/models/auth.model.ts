export interface AuthState {
  token: string;
  username: string;
  password: string;
}

export function initialAuthState(): AuthState {
  return {
    token: '',
    username: '',
    password: ''
  }
}