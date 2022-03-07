import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { CartItem } from './cart.service';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'cart',
  idKey: 'productId'
})
export class CartStore extends EntityStore<CartItem> {

  constructor() {
    super();
  }
}
