import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IclinicoComponent } from './iclinico.component';

const routes: Routes = [
  {
    path: '',
    component: IclinicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IClinicoRoutingModule { }
