import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthState } from '../models/auth.model';
import { AuthStore } from './auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<AuthState> {

  isLoggedIn$ = this.select((state: AuthState) => !!state.token);

  isLoggedIn(): boolean {
    return !!this.getValue().token;
  }

  constructor(protected override store: AuthStore) {
    super(store);
  }
}
