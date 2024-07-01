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
        path: 'iclinico',
        loadChildren: () => import('../iclinico/iclinico.module').then(m => m.IClinicoModule)
      },
      {
        path: 'sesiones',
        loadChildren: () => import('../sesiones/sesiones.module').then(m => m.SesionesModule)
      },
      {
        path: 'pagos',
        loadChildren: () => import('../pagos/pagos.module').then(m => m.PagosModule)
      },
      {
        path: '**',
        redirectTo: 'cita',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
