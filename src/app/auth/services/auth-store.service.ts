import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { AuthState, createInitialState } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'auth',
  resettable: true // able to call store.reset anytime to go back to the store's initial value 
  // => logout
})
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(createInitialState());
  }
}

