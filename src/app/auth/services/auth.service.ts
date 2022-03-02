import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { baseUrl } from 'src/app/app.module';
import { AuthState } from '../models/auth.model';
import { AuthStore } from './auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly store: AuthStore,
    private readonly http: HttpClient
  ) { }

  login(credential: AuthState): Observable<AuthState> {
    return this.http.post<AuthState>(`${baseUrl}/auth/login`, credential).pipe(
      tap(({ token }) => this.store.update({
        username: credential.username,
        password: credential.password,
        token
      }))
    )
  }

  logout(): void {
    this.store.reset();
    localStorage.removeItem('akita')
  }
}
