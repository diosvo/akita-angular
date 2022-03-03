import { TestBed } from '@angular/core/testing';
import { ProductsQuery } from './products-query.service';


describe('ProductsQuery', () => {
  let service: ProductsQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsQuery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
