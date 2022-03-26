import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Subject, take, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  loading = false;
  error$ = new Subject<string>();

  form: FormGroup = this.fb.group({
    username: ['mor_2314', [Validators.required]],
    password: ['83r5^_', [Validators.required]],
  })

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly auth: AuthService
  ) { }

  onSubmit(): void {
    this.loading = true;

    this.auth.login(this.form.value)
      .pipe(
        take(1),
        tap({
          error: () => this.form.get('password').setValue(null)
        }),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: () => this.router.navigateByUrl('products'),
        error: ({ message }) => this.error$.next(message)
      })
  }
}
