import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoNegocioComponent } from '../../shared/components/logo-negocio/logo-negocio.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    LogoNegocioComponent,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
