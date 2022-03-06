import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs';
import { CartStore } from './cart-store.service';
import { CartItem } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartQuery extends QueryEntity<CartItem> {

  selectTotal$ = this.selectAll().pipe(
    map((items: CartItem[]) => items.reduce((acc, item) => acc + item.total, 0))
  )

  constructor(
    override readonly store: CartStore
  ) {
    super(store);
  }
}
