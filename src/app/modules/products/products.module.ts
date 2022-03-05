import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseProductComponent } from './components/base-product/base-product.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

@NgModule({
  declarations: [
    FiltersComponent,
    ProductsPageComponent,
    BaseProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsPageComponent
      }
    ]),

    ReactiveFormsModule
  ]
})
export class ProductsModule { }
