import { Component } from '@angular/core';
import { Breadcrumb } from 'src/app/core/index.model.system';
import { BreadcrumbService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-iclinico',
  templateUrl: './iclinico.component.html',
  styleUrls: ['./iclinico.component.css']
})
export class IclinicoComponent {
  listBreadcrumb: Breadcrumb[] = [
    { name: 'Lista de pacientes', route: '/home/paciente' },
    { name: 'Historiales clínicos', route: '/home/paciente/historial-clinico' },
  ];

  constructor(
    private breadcrumbSrv: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.breadcrumbSrv.defineBreadcrumb(this.listBreadcrumb);
  }
}
