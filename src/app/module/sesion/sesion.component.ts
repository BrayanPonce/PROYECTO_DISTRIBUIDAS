import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    { name: 'Historiales clínicos', route: '/home/paciente/historial-clinico/0' },
    { name: 'Sesión', route: '/home/paciente/historial-clinico/0/sesion' }
  ];
  sesiones: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(
    private breadcrumbSrv: BreadcrumbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
      const id: number = params['id'];
      this.listBreadcrumb[1].route = `/home/paciente/historial-clinico/${id}`;
      this.listBreadcrumb[2].route = `/home/paciente/historial-clinico/${id}/sesion`;
      this.breadcrumbSrv.defineBreadcrumb(this.listBreadcrumb);
      },
      err => this.breadcrumbSrv.defineBreadcrumb(this.listBreadcrumb)
  );
  }
}
