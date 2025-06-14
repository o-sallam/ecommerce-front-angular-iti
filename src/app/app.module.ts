import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/specific/product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/shared/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
