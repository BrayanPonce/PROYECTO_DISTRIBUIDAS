import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RegisterPacientService } from './register-pacient.service';

@Component({
  selector: 'app-register-pacient',
  standalone: true,
  templateUrl: './register-pacient.component.html',
  styleUrls: ['./register-pacient.component.css'],
  imports: [CommonModule],
})
export class RegisterPacientComponent {

  @ViewChild('ContenedorModal') contenderModal!: ElementRef;

  constructor(
    private registerSrv: RegisterPacientService
  ){}

  public CerrarModal($event: any) {
    const container = this.contenderModal.nativeElement;
    if($event === container) {
      this.cerrar();
    }
  }

  public cerrar() {
    this.registerSrv.activarModal$.emit(false);
  }
}
