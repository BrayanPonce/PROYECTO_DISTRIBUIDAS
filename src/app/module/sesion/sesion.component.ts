import { Component } from '@angular/core';
import { Breadcrumb } from 'src/app/core/index.model.system';
import { BreadcrumbService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  listBreadcrumb: Breadcrumb[] = [
    { name: 'Lista de pacientes', route: '/home/paciente' },
    { name: 'Historiales clínicos', route: '/home/paciente/historial-clinico' },
    { name: 'Sesión', route: '/home/paciente/historial-clinico/sesion' }
  ];
  sesiones: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(
    private breadcrumbSrv: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.breadcrumbSrv.defineBreadcrumb(this.listBreadcrumb);
  }
}
