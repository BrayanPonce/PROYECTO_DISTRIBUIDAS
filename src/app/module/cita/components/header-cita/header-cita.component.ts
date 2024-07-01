// header-cita.component.ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-header-cita',
  templateUrl: './header-cita.component.html',
  styleUrls: ['./header-cita.component.css']
})
export class HeaderCitaComponent implements AfterViewInit {
  @ViewChild('Date') dateInput: ElementRef<HTMLInputElement> | undefined;

  ngAfterViewInit(): void {
    if (this.dateInput) {
      this.dateInput.nativeElement.valueAsDate = new Date();
    }
  }

  constructor(private modalSrv: ModalService) {}

  public watchData(): void {
    this.modalSrv.activatedModal$.emit(true);
  }
}
