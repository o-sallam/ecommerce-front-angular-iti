import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { ProductListComponent } from './components/specific/product-list/product-list.component';

const routes: Routes = [
  // {path:'home',component:},
  {path:'cart',component:CartpageComponent},
  {path:'poduct',component:ProductListComponent},
  // {path:'about',component:},
  // {path:'contactUs',component:},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
