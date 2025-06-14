import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './pages/cartpage/cartpage.component';

const routes: Routes = [
  // {path:'home',component:},
  {path:'cart',component:CartpageComponent},
  // {path:'poduct',component:},
  // {path:'about',component:},
  // {path:'contactUs',component:},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
