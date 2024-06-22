import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { CitaComponent } from './cita.component';


@NgModule({
  declarations: [
    CitaComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule
  ]
})
export class CitaModule { }
