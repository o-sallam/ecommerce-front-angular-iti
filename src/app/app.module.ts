import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreCollectionComponent } from './components/explore-collection/explore-collection.component';
import { RouterModule } from '@angular/router';
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
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CheckoutContainerComponent } from './components/specific/checkout-container/checkout-container.component';
import { CheckoutFormComponent } from './components/shared/checkout-form/checkout-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CategoryComponent } from './pages/category/category.component';
import { PaymentFormComponent } from './components/shared/payment-form/payment-form.component';
import { PaymentContainerComponent } from './components/specific/payment-container/payment-container.component';
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
    LoginFormComponent,
    CheckoutPageComponent,
    CheckoutContainerComponent,
    CheckoutFormComponent,
    HomeComponent,
    ContactusComponent,
    FooterComponent,
    AboutusComponent,
    CategoryComponent,
    ExploreCollectionComponent,
    PaymentFormComponent,
    PaymentContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
