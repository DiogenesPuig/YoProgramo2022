import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// My Component

import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/profile/profile.component';

// Services


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'/login',component:LoginComponent},
  {path:'/register',component:RegisterComponent},
  {path:'/profile',component:ProfileComponent},//Solo se ingresa si esta autentificado
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
