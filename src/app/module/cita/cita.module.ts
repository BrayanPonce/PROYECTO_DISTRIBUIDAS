import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { CitaComponent } from './cita.component';
import { HeaderCitaComponent } from './components/header-cita/header-cita.component';
import { CardOnelineComponent } from './components/card-oneline/card-oneline.component';
import { ModalComponent } from 'src/app/module/cita/components/modal/modal.component';
import { RegisterPacientComponent } from 'src/app/shared/components/register-pacient/register-pacient.component';





@NgModule({
  declarations: [
    CitaComponent,
    HeaderCitaComponent,
    CardOnelineComponent,
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    ModalComponent,
    RegisterPacientComponent,
    
  ]
})
export class CitaModule { }
