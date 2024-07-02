import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './components/modal/modal.service';
import { RegisterPacientService } from 'src/app/shared/components/register-pacient/register-pacient.service';
import { CitasService } from 'src/app/core/services/citas.service';
import { Router } from '@angular/router';
import { Cita, Paciente } from 'src/app/core/index.model.interface';
import { PacienteService } from 'src/app/core/services/paciente.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit, OnDestroy {

  pacientes: Paciente[] = [];
  filteredPacientes: Paciente[] = [];
  selectedPaciente: any;
  showDropdown = false;


  citas:Cita[] = [];

  activateModal: boolean = false;
  modalSubcription: Subscription = new Subscription();

  activarModalPaciente: boolean = false;
  modalPacienteSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
    private registerSrv: RegisterPacientService,
    private citaSrv:CitasService,
    private PacienteSrv:PacienteService
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
        this.citas = data;
        console.log('Citas:', this.citas);  // Verifica que los datos están llegando
      }, error => {
        console.error('Error al listar citas:', error);
      });

          // Listar pacientes
    this.PacienteSrv.listarpacientes()
    .subscribe(data => {
      this.pacientes = data;
      this.filteredPacientes = [...this.pacientes];  // Copia inicial para filtrar
      console.log('Pacientes:', this.pacientes);  // Verifica que los datos están llegando
    }, error => {
      console.error('Error al listar pacientes:', error);
    });


  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
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
