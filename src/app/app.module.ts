import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './components/specific/product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/shared/product-card/product-card.component';


import { CartComponent } from './components/specific/cart/cart.component';
import { CartItemComponent } from './components/shared/cart-item/cart-item.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { NavbarComponent } from './components/specific/navbar/navbar.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,

    ProductListComponent,
    ProductCardComponent,

    CartComponent,
    CartItemComponent,
    CartpageComponent,
    NavbarComponent,
    ProductDetailComponent,
    RegisterFormComponent,
    LoginFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

     HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
