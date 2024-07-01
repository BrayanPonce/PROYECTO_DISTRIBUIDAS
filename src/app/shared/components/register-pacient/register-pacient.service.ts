// modal.service.ts
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterPacientService {
  activarModal$: EventEmitter<boolean> = new EventEmitter<boolean>();
}

