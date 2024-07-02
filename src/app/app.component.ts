import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-notify></app-notify>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Proyecto_Fisiomedic_V';
}
