import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { baseUrl } from 'src/app/app.module';
import { Product } from '../../products/models/product.model';
import { CartStore } from './cart-store.service';

export interface CartItem {
  productId: ID;
  quantity: number;
  title: Product['title'];
  price: Product['price'];
  total: number;
}

export interface CartRequest {
  id: ID;
  userId: ID;
  date: Date;
  products: Pick<CartItem, 'productId' | 'quantity'>[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private readonly http: HttpClient,
    private readonly store: CartStore
  ) { }

  all(userId: number = 1): Observable<Pick<CartItem, 'productId' | 'quantity'>[]> {
    return this.http.get<CartRequest>(`${baseUrl}/carts/${userId}`).pipe(
      map(({ products }) => products)
    );
  }

  add(product: Product, quantity: number): void {
    this.store.upsert(product.id, {
      title: product.title,
      price: product.price,
      total: product.price * quantity,
      quantity
    });
  }

  remove(productId: ID): void {
    this.store.remove(productId);
  }
}
