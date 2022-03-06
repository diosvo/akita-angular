import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from '../../models/product.model';
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
    private readonly cart: CartService,
    private readonly query: ProductsQuery,
    private readonly route: ActivatedRoute,
    private readonly service: ProductsService
  ) { }

  ngOnInit(): void {
    if (this.query.hasProduct(this.productId) === false) {
      this.service.byId(this.productId).subscribe();
    }
  }

  addToCart(product: Product): void {
    this.cart.add(product, this.quantity.value);
    alert('Added to cart');
  }
}
