import { Component, Input, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Cita } from 'src/app/core/index.model.interface';

@Component({
  selector: 'app-card-oneline',
  templateUrl: './card-oneline.component.html',
  styleUrls: ['./card-oneline.component.css']
})
export class CardOnelineComponent implements OnInit {

  @Input() citas: Cita[] = [];

  constructor() { }

  ngOnInit(): void {
    this.citas.forEach(cita => {
      if (typeof cita.hora === 'string') {
        cita.hora = new Date(cita.hora);
      }
    });
  }

  formatTime(time: Date | undefined): string {
    if (!time) {
      return '';
    }
    return format(time, 'p');
  }

}
