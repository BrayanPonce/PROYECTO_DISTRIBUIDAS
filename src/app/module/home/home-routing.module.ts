import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';

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
        component: BreadcrumbComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../paciente/paciente.module').then(m => m.PacienteModule)
          },
          {
            path: 'historial-clinico/:id',
            loadChildren: () => import('../iclinico/iclinico.module').then(m => m.IClinicoModule)
          },
          {
            path: 'historial-clinico/:id/sesion',
            loadChildren: () => import('../sesion/sesion.module').then(m => m.SesionModule)
          },
          {
            path: '**',
            redirectTo: 'historial-clinico',
            pathMatch: 'full'
          }
        ]
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
