export interface AuthState {
  token: string;
  email: string;
  password: string;
}

export function createInitialState(): AuthState {
  return {
    token: '',
    email: '',
    password: ''
  }
}