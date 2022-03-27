import { Component, OnInit } from '@angular/core';
import { combineLatest, EMPTY, Observable, switchMap } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductsQuery } from '../../services/products-query.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  isLoading$: Observable<boolean>;
  products$: Observable<Product[]>;

  constructor(
    private readonly query: ProductsQuery,
    private readonly service: ProductsService,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.query.selectLoading();
    this.products$ = this.query.selectAll();

    combineLatest([this.query.selectHasCache(), this.query.selectFilters$])
      .pipe(switchMap(([cached, filters]) => cached ? EMPTY : this.service.all(filters)))
      .subscribe();
  }
}
