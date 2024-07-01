// modal.service.ts
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  activatedModal$: EventEmitter<boolean> = new EventEmitter<boolean>();
}

