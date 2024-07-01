import { Component } from '@angular/core';
import { LogoNegocioComponent } from '../logo-negocio/logo-negocio.component';
import { HomeRoutingModule } from 'src/app/module/home/home-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PerfilUsuarioComponent } from '../perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, LogoNegocioComponent, PerfilUsuarioComponent, HomeRoutingModule],
})
export class SidebarComponent {
  isActiveHide: boolean = false;

  public reactiveSidebar($event: boolean): void {
    this.isActiveHide = $event
  }
}
