import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { ProductListComponent } from './components/specific/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cart',component:CartpageComponent},
  {path:'products',component:ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent },
  {path:'aboutus',component:AboutusComponent},
  {path:'contactUs',component:ContactusComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
