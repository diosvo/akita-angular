import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { ProductFilters } from '../../models/product.model';
import { ProductsQuery } from '../../services/products-query.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filters = new FormGroup({
    limit: new FormControl(),
    sort: new FormControl('desc')
  });

  search = new FormControl('');

  constructor(
    private readonly query: ProductsQuery,
    private readonly service: ProductsService,
  ) { }

  ngOnInit(): void {
    this.updateFilters();
    this.updateSearch();
  }

  private updateFilters(): void {
    this.filters.patchValue(this.query.filters);
    this.filters.valueChanges
      .pipe(
        tap(() => this.service.invalidateCache())
      )
      .subscribe((filters: ProductFilters) => this.service.updateFilters(filters))
  }

  private updateSearch(): void {
    this.search.patchValue(this.query.searchTerm);
    this.search.valueChanges
      .pipe(
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe((term: string) => this.service.updateSearchTerm(term));
  }
}
