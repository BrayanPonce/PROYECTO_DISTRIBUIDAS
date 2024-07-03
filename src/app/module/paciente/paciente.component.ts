import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Paciente } from 'src/app/core/index.model.interface';
import { Breadcrumb } from 'src/app/core/index.model.system';
import { BreadcrumbService } from 'src/app/core/index.service.triggers';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { RegisterPacientService } from 'src/app/shared/components/register-pacient/register-pacient.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  listBreadcrumb: Breadcrumb[] = [
    { name: 'Lista de pacientes', route: '/home/paciente' },
  ];
  pacientes: Paciente[] = [];
  filteredPacientes: Paciente[] = [];
  selectedPaciente: any;
  showDropdown = false;


  activarModalPaciente: boolean = false;
  modalPacienteSubcription: Subscription = new Subscription();

  constructor(
    private registerSrv: RegisterPacientService,
    private PacienteSrv: PacienteService,
    private breadcrumbSrv: BreadcrumbService
  ) { }

  public WatchData(): void {
    this.registerSrv.activarModal$.emit(true);
  }

  ngOnInit(): void {

    this.modalPacienteSubcription = this.registerSrv.activarModal$.subscribe(activate => {
      this.activarModalPaciente = activate
    })

    this.breadcrumbSrv.defineBreadcrumb(this.listBreadcrumb);
    // Listar pacientes
    this.PacienteSrv.listarpacientes()
      .subscribe(data => {
        this.pacientes = data;
        this.filteredPacientes = [...this.pacientes];  // Copia inicial para filtrar
        console.log('Pacientes:', this.pacientes);  // Verifica que los datos están llegando
      }, error => {
        console.error('Error al listar pacientes:', error);
      });

    this.PacienteSrv.getPaciente(1) // Obtener un paciente por su ID
      .subscribe(data => {
        this.selectedPaciente = data;
        console.log('Paciente:', this.selectedPaciente);  // Verifica que los datos están llegando
      }, error => {
        console.error('Error al buscar paciente:', error);
      });
  }

  ngOnDestroy(): void {
    this.modalPacienteSubcription.unsubscribe();
  }
  filterPacientes() {
    const filterValue = (document.getElementById('inputPaciente') as HTMLInputElement).value.toLowerCase();
    this.filteredPacientes = this.pacientes.filter(paciente => paciente.nombre.toLowerCase().startsWith(filterValue));
  }

  selectPaciente(pacientes: Paciente) {
    this.selectedPaciente = pacientes;
    (document.getElementById('inputPaciente') as HTMLInputElement).value = pacientes.nombre;
    this.showDropdown = false; // Oculta el dropdown después de seleccionar
  }

  hideDropdown() {
    // Usa un pequeño retraso para permitir que el evento mousedown en los items del dropdown se dispare
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }
}
