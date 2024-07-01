import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './components/modal/modal.service';
import { RegisterPacientService } from 'src/app/shared/components/register-pacient/register-pacient.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit, OnDestroy {

  pacientes = [
    { id: 1, name: 'Luis Alberto' },
    { id: 2, name: 'Alvaro Maguiña' },
    { id: 3, name: 'Moises Morales' },
    { id: 4, name: 'Erick Mendoza' }
  ];
  filteredPacientes = [...this.pacientes];
  selectedPaciente: any;
  showDropdown = false;


  citas: number[] = [1,2,3]

  activateModal: boolean = false;
  modalSubcription: Subscription = new Subscription();

  activarModalPaciente: boolean = false;
  modalPacienteSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
    private registerSrv: RegisterPacientService
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
  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
    this.modalPacienteSubcription.unsubscribe();
  }
  filterPacientes() {
    const filterValue = (document.getElementById('inputPaciente') as HTMLInputElement).value.toLowerCase();
    this.filteredPacientes = this.pacientes.filter(paciente => paciente.name.toLowerCase().startsWith(filterValue));
  }

  selectPaciente(paciente: any) {
    this.selectedPaciente = paciente;
    (document.getElementById('inputPaciente') as HTMLInputElement).value = paciente.name;
    this.showDropdown = false; // Oculta el dropdown después de seleccionar
  }

  hideDropdown() {
    // Usa un pequeño retraso para permitir que el evento mousedown en los items del dropdown se dispare
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }
}
