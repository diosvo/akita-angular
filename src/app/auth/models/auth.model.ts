export interface AuthState {
  token: string;
  username: string;
  password: string;
}

export function createInitialState(): AuthState {
  return {
    token: '',
    username: '',
    password: ''
  }
}