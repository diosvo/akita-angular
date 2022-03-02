import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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
    if (this.form.invalid) {
      return
    }

    this.auth.login(this.form.value).subscribe({
      next: () => {
        alert('Welcome');
        this.router.navigateByUrl('')
      },
      error: ({ message }) => this.error$.next(message)
    })
  }
}
