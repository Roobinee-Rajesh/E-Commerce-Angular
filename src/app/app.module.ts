import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ECommerceService } from './service/e-commerce.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartService } from './service/cart.service';
import { OrdersService } from './service/orders.service';
import { HomeService } from './service/home.service';
import { RegisterService } from './service/register.service';
import { AuthService } from './service/auth.service';
import { StorageService } from './service/storage.service';
import { ReferenceComponent } from './components/reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    OrdersComponent,
    NavBarComponent,
    NotFoundComponent,
    ReferenceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    CartService,
    OrdersService,
    HomeService,
    RegisterService,
    AuthService,
    StorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
