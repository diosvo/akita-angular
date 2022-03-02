import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { initialProductState, ProductState } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'products'
})
export class ProductsStoreService extends EntityStore<ProductState> {

  constructor() {
    super(initialProductState());
  }
}
