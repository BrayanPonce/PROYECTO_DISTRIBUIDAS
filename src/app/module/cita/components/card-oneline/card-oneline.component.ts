import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/index.model.interface';
import { CitasService } from 'src/app/core/services/citas.service';

@Component({
  selector: 'app-card-oneline',
  templateUrl: './card-oneline.component.html',
  styleUrls: ['./card-oneline.component.css']
})
export class CardOnelineComponent implements OnInit {

  @Input() citas: Cita[] = [];

  constructor() { }

  ngOnInit(): void { }
}
