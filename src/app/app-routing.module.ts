import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/products/products.module').then(({ ProductsModule }) => ProductsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/components/login/login.module').then(({ LoginModule }) => LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
