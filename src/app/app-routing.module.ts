import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { SuccessComponent } from './success/success.component';
import { UsernameComponent } from './username/username.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'success', component: SuccessComponent},
  {path: 'signup', component: SingupComponent},
  {path: 'username', component: UsernameComponent},
  {path: 'welcome', component: WelcomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
