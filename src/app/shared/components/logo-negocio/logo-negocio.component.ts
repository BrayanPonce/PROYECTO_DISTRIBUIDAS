import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-negocio',
  templateUrl: './logo-negocio.component.html',
  styleUrls: ['./logo-negocio.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LogoNegocioComponent {
  @Input() scale: number = 1;
  @Input() isActiveHide: boolean = false;
}
