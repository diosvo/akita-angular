import { Injectable } from '@angular/core';
import { ID, QueryEntity } from '@datorama/akita';
import { filter, Observable } from 'rxjs';
import { Product, ProductsState } from '../models/product.model';
import { ProductsStore } from './products-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsQuery extends QueryEntity<ProductsState> {

  selectFilters$ = this.select('filters');
  selectSearchTerm$ = this.select('searchTerm');

  get filters(): { limit: number, sort: 'desc' | 'asc' } {
    return this.getValue().filters;
  }

  get searchTerm(): string {
    return this.getValue().searchTerm;
  }

  constructor(protected override store: ProductsStore) {
    super(store);
  }

  hasProduct(id: ID): boolean {
    return this.hasEntity(id) && !!this.getEntity(id);
  }

  selectProduct(id: ID): Observable<Product> {
    const product$ = this.selectEntity(id) as Observable<Product>;

    return product$.pipe(
      filter((product: Product) => !!product)
    );
  }
}
