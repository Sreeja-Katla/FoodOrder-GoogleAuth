import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';

import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { OwnerMenuComponent } from './owner-menu/owner-menu.component';
import { PaymentImplementComponent } from './payment-implement/payment-implement.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'cart',component:CartComponent},
  {path:'restaurent',component:RestaurentsComponent},
  {path:'signup',component:SignupComponent},
  {path:'logout',component:LogoutComponent},
  {path:'ownerMenu',component:OwnerMenuComponent},
  {path:'PaymentImplement',component:PaymentImplementComponent}

 
  // {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
