import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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


  pacienteForm: FormGroup;
  // new_paciente: Paciente = {
  //   idpac: undefined,
  //   nombre: '',
  //   apellido: '',
  //   domicilio: '',
  //   fecha_nac: new Date(),
  //   lugar_nac: '',
  //   telefono: 0,
  //   residencia: '',
  //   estado_civil: '',
  //   n_hijos: 0,
  //   referencia: '',
  //   tipo_documento: false,
  //   ndoc_documento: 0,
  //   correo: ''
  // };



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
    private breadcrumbSrv: BreadcrumbService,
    private router: Router,
    private fb: FormBuilder,
  ) {

    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ndoc_documento: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

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

  // newPaciente(): void {
  //   // Lógica para guardar una cita
  //   console.log('Paciente Guardado');
  //   this.PacienteSrv.crearPaciente(this.new_paciente).subscribe({
  //     next:(data) => {
  //       console.log(data);
  //       this.router.navigate(['/home/paciente'])
  //     },
  //     error: (er) => {
  //       console.log(er);
  //     }
  //   })
  // }

  newPaciente(): void {
    if (this.pacienteForm.valid) {
      const new_paciente: Paciente = {
        idpac: undefined,
        nombre: this.pacienteForm.value.nombre,
        apellido: this.pacienteForm.value.apellido,
        domicilio: '',
        fecha_nac: new Date(),
        lugar_nac: '',
        telefono: this.pacienteForm.value.telefono,
        residencia: '',
        estado_civil: '',
        n_hijos: 0,
        referencia: '',
        tipo_documento: false,
        ndoc_documento: this.pacienteForm.value.ndoc_documento,
        correo: this.pacienteForm.value.correo
      };

      console.log('Paciente Guardado');
      this.PacienteSrv.crearPaciente(new_paciente).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/home/paciente']);
        },
        error: (er) => {
          console.log(er);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
