import { Component } from '@angular/core';
import { Breadcrumb } from 'src/app/core/index.model.system';
import { BreadcrumbService } from 'src/app/core/index.service.triggers';
import { PacienteService } from '../../core/services/paciente.service';
import { Paciente } from 'src/app/core/index.model.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iclinico',
  templateUrl: './iclinico.component.html',
  styleUrls: ['./iclinico.component.css']
})
export class IclinicoComponent {
  listBreadcrumb: Breadcrumb[] = [
    { name: 'Lista de pacientes', route: '/home/paciente' },
    { name: 'Historiales clínicos', route: '/home/paciente/historial-clinico/0' },
  ];
  paciente: Paciente = {} as Paciente;
  testId: string = "";

  constructor(
    private breadcrumbSrv: BreadcrumbService,
    private PacienteSrv: PacienteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id: number = params['id'];
      this.PacienteSrv.getPaciente(id).subscribe(data => {
        this.paciente = data;
        console.log(this.paciente);
      })
    });
    this.breadcrumbSrv.defineBreadcrumb(this.listBreadcrumb);
  }

  public encontrarEdad(fechaNacimiento: Date): number {
    const fechaActual = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
      edad--;
    }
    return edad;
  }
}
