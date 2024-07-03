import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './components/modal/modal.service';
import { RegisterPacientService } from 'src/app/shared/components/register-pacient/register-pacient.service';
import { CitasService } from 'src/app/core/services/citas.service';
import { Cita, Paciente } from 'src/app/core/index.model.interface';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { format } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit, OnDestroy {

  pacientes: Paciente[] = [];
  filteredPacientes: string[] = [];
  selectedPaciente: any;
  showDropdown = false;

  new_cita: Cita = {
    idcita: undefined,
    tipo: '',
    hora: new Date(),
    n_sesion: 0,
    fecha: new Date(),
    pacienteDTOs: {
      idpac: undefined,
      nombre: '',
      apellido: '',
      domicilio: '',
      fecha_nac: new Date(),
      lugar_nac: '',
      telefono: 0,
      residencia: '',
      estado_civil: '',
      n_hijos: 0,
      referencia: '',
      tipo_documento: false,
      ndoc_documento: 0,
      correo: '',
    },
    estadoCita: {
      id_estado_cita: undefined,
      nombre_estado: '',
    }
  };


  citas:Cita[] = [];

  activateModal: boolean = false;
  modalSubcription: Subscription = new Subscription();

  activarModalPaciente: boolean = false;
  modalPacienteSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
    private registerSrv: RegisterPacientService,
    private citaSrv:CitasService,
    private PacienteSrv:PacienteService,
    private router: Router
  ) {  }

    public WatchData(): void {
    this.registerSrv.activarModal$.emit(true);
  }

  ngOnInit(): void {
    this.modalSubcription = this.modalSrv.activatedModal$.subscribe(activate => {
      this.activateModal = activate
    this.modalPacienteSubcription = this.registerSrv.activarModal$.subscribe(activate => {
      this.activarModalPaciente = activate
    })
    })

    this.citaSrv.listarCitas()
      .subscribe(data => {
        this.citas = data;})

          // Listar pacientes
    this.PacienteSrv.listarpacientes()
    .subscribe(data => {
      this.pacientes = data;
      this.filteredPacientes = this.pacientes.map(paciente => paciente.nombre + " " + paciente.apellido);

    });


  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
    this.modalPacienteSubcription.unsubscribe();
  }
  filterPacientes() {
    const nombre_completo = this.pacientes.map(paciente => paciente.nombre + " " + paciente.apellido);
    const filterValue = (document.getElementById('inputPaciente') as HTMLInputElement).value.toLowerCase();
    this.filteredPacientes = nombre_completo.filter(paciente => paciente.toLowerCase().startsWith(filterValue));
    console.log(nombre_completo);
  }

  selectPaciente(pacientes: string) {
    this.selectedPaciente = pacientes;
    (document.getElementById('inputPaciente') as HTMLInputElement).value = pacientes;
    this.showDropdown = false; // Oculta el dropdown después de seleccionar
  }

  hideDropdown() {
    // Usa un pequeño retraso para permitir que el evento mousedown en los items del dropdown se dispare
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }

  formatTime(time: string): string {
    return format(new Date(time), 'p');
  }
  // Define tu función sin parámetros
  GuardarCita(): void {
    // Lógica para guardar una cita
    console.log('Cita guardada');
    this.citaSrv.crearCita(this.new_cita).subscribe(data => {
      alert('Cita guardada');
      this.router.navigate(['/cita']);
    })
  }

}
