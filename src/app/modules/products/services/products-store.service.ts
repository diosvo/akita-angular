import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { initialProductsState, ProductsState } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'products'
})
export class ProductsStore extends EntityStore<ProductsState> {

  constructor() {
    super(initialProductsState());
  }
}
