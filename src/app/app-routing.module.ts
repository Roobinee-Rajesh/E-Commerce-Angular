import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuardGuard } from './shared/auth-guard.guard';
import { ReferenceComponent } from './components/reference/reference.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'orders', component: OrdersComponent,canActivate:[authGuardGuard] },
  // { path: 'cart', component: CartComponent,canActivate:[authGuardGuard] },
  // { path: 'login', component: LoginComponent },
  // { path: 'Register', component: RegisterComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent,canActivate:[authGuardGuard] },
  { path: 'cart', component: CartComponent,canActivate:[authGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '', component: ReferenceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
