import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(({ ProductsModule }) => ProductsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/components/login/login.module').then(({ LoginModule }) => LoginModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module').then(({ CartModule }) => CartModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
