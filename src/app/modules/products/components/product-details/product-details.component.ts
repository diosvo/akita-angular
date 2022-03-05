import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsQuery } from '../../services/products-query.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  quantity = new FormControl('1');

  product$ = this.query.selectProduct(this.productId);

  get productId(): number {
    return this.route.snapshot.params['id'];
  }

  constructor(
    private readonly query: ProductsQuery,
    private readonly route: ActivatedRoute,
    private readonly service: ProductsService
  ) { }

  ngOnInit(): void {
    if (this.query.hasProduct(this.productId) === false) {
      this.service.byId(this.productId).subscribe();
    }
  }
}
