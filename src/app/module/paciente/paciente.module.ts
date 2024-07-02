import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { RegisterPacientComponent } from 'src/app/shared/components/register-pacient/register-pacient.component';


@NgModule({
  declarations: [
    PacienteComponent,

  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    RegisterPacientComponent
  ]
})
export class PacienteModule { }
