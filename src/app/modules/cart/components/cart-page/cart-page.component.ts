import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ID } from '@datorama/akita';
import { AuthQuery } from 'src/app/auth/services/auth-query.service';
import { CartQuery } from '../../services/cart-query.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  items$ = this.query.selectAll();
  count$ = this.query.selectCount();
  total$ = this.query.selectTotal$;

  constructor(
    private readonly router: Router,
    private readonly auth: AuthQuery,
    private readonly query: CartQuery,
    private readonly cart: CartService
  ) { }

  remove(productId: ID): void {
    this.cart.remove(productId);
  }

  checkout(): void {
    if (this.auth.isLoggedIn()) {
      // checkout
    } else {
      this.router.navigateByUrl('login');
    }
  }

}
