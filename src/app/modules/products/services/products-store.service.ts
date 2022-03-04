import { Injectable } from '@angular/core';
import { EntityStore, ID, StoreConfig } from '@datorama/akita';
import { initialProductsState, Product, ProductsState } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'products'
})
export class ProductsStore extends EntityStore<ProductsState, Product> {

  constructor() {
    super(initialProductsState);
  }

  updateCacheIds(id: ID): void {
    this.update(state => ({
      cacheIds: { ...state.cacheIds, [id]: true }
    }))
  }
}
