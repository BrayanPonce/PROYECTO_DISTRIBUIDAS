import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'cita',
        loadChildren: () => import('../cita/cita.module').then(m => m.CitaModule)
      },
      {
        path: 'paciente',
        loadChildren: () => import('../paciente/paciente.module').then(m => m.PacienteModule)
      },
      {
        path: '**',
        redirectTo: 'cita',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
