import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiErrorModule, TuiNotificationsModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),

    ReactiveFormsModule,

    TuiInputModule,
    TuiErrorModule,
    TuiButtonModule,
    TuiInputPasswordModule,
    TuiNotificationsModule,
  ]
})
export class LoginModule { }
