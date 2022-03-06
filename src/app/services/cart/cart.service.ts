import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Product } from '../../modules/products/models/product.model';
import { CartStore } from './cart-store.service';

export interface CartItem {
  productId: ID;
  quantity: number;
  title: Product['title'];
  price: Product['price'];
  total: number;
}

export interface CartRequest {
  userId: ID;
  date: Date;
  products: Pick<CartItem, 'productId' | 'quantity'>[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private readonly store: CartStore
  ) { }

  add(product: Product, quantity: number): void {
    this.store.upsert(product.id, {
      title: product.title,
      price: product.price,
      total: product.price * quantity
    });
  }

  remove(productId: ID): void {
    this.store.remove(productId);
  }
}
