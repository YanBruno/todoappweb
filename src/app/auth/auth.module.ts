import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const MODULES = [
  AuthRoutingModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MODULES
  ]
})
export class AuthModule { }
