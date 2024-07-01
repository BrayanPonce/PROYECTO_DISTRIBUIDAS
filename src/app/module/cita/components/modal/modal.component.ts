// app-modal.component.ts
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ModalService } from './modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CommonModule],
})
export class ModalComponent {
  @Input() withClickDesactiveModal: boolean = true;
  @ViewChild('asContainerModal') containerModal!: ElementRef;

  constructor(
    private modalSrv: ModalService
  ){}

  public closeModal($event: any) {
    const container = this.containerModal.nativeElement;
    if($event === container && this.withClickDesactiveModal) {
      this.emitCloseModal();
    }
  }

  public emitCloseModal() {
    this.modalSrv.activatedModal$.emit(false);
  }
}
