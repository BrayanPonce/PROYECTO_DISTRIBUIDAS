import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionRoutingModule } from './sesion-routing.module';
import { SesionComponent } from './sesion.component';
import { CardSesionComponent } from './card-sesion/card-sesion.component';


@NgModule({
  declarations: [
    SesionComponent,
    CardSesionComponent
  ],
  imports: [
    CommonModule,
    SesionRoutingModule,

  ]
})
export class SesionModule { }
