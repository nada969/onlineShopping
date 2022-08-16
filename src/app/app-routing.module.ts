import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'Products', component:ProductsComponent},
  {path:'cart', component:CartComponent}
  ////profile
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
