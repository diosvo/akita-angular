import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable, tap } from 'rxjs';
import { baseUrl } from 'src/app/app.module';
import { Product, ProductFilters } from '../models/product.model';
import { ProductsStore } from './products-store.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private readonly http: HttpClient,
    private readonly store: ProductsStore
  ) { }

  all(filters: ProductFilters): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/products?limit=${filters.limit}&sort=${filters.sort}`).pipe(
      tap((products: Product[]) => this.store.set(products))
    );
  }

  byId(id: ID): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/products/${id}`).pipe(
      tap((product: Product) => this.store.update(product))
    );
  }

  updateSearchTerm(searchTerm: string): void {
    this.store.update({ searchTerm });
    this.invalidCache();
  }

  private invalidCache(): void {
    this.store.setHasCache(false);
  }
}
