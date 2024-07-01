import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IClinicoRoutingModule } from './iclinico-routing.module';
import { IclinicoComponent } from './iclinico.component';


@NgModule({
  declarations: [
    IclinicoComponent
  ],
  imports: [
    CommonModule,
    IClinicoRoutingModule
  ]
})
export class IClinicoModule { }
