import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { ProductListComponent } from './components/specific/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'cart',component:CartpageComponent},
  {path:'products',component:ProductListComponent},
  // {path:'about',component:},
  // {path:'contactUs',component:},
 { path: 'products/:id', component: ProductDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
