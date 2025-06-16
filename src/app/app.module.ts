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
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutContainerComponent } from './components/specific/checkout-container/checkout-container.component';
import { CheckoutFormComponent } from './components/shared/checkout-form/checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';



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
    CheckoutPageComponent,
    CheckoutContainerComponent,
    CheckoutFormComponent,
    HomeComponent,
    ContactusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
