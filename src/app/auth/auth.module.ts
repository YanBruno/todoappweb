import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const MODULES = [
  AuthRoutingModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MODULES
  ]
})
export class AuthModule { }
