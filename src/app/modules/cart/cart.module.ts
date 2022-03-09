import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';

@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class CartModule { }
