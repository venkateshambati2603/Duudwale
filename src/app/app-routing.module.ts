import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './shared/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  // {path:'products',component:HeaderComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'search/:searchItem', component:ProductsComponent},
  {path:'products',canActivate:[AuthGuard], component: ProductsComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'profile', canActivate:[AuthGuard], component:ProfileComponent},
  {path:'**', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
