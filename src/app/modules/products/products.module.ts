import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiInputModule } from '@taiga-ui/kit';
import { BaseProductComponent } from './components/base-product/base-product.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

@NgModule({
  declarations: [
    FiltersComponent,
    ProductsPageComponent,
    BaseProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsPageComponent
      },
      {
        path: ':id',
        component: ProductDetailsComponent
      }
    ]),

    ReactiveFormsModule,

    TuiInputModule
  ]
})
export class ProductsModule { }
