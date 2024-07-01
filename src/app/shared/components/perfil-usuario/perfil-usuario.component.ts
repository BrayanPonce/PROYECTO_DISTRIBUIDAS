import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from 'src/app/module/home/home-routing.module';

interface User {
  name: string;
  role: string;
}

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HomeRoutingModule]
})
export class PerfilUsuarioComponent {
  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('checkboxMenu') checkboxMenuElement!: ElementRef;
  @Output() isActivateSidebar$: EventEmitter<boolean> = new EventEmitter<boolean>();
  isDesactiveSidebar: boolean = false;
  isActivateMenu: boolean = false;
  user: User = {
    name: 'Abel Alexis Maguiña Ponce',
    role: 'Administrador'
  }

  @HostListener('window:click', ['$event'])
  handleClickOutside(event: Event) {
    let isNotElementOfMenu = !this.menuElement.nativeElement.contains(event.target) && !this.checkboxMenuElement.nativeElement.contains(event.target)
    if (isNotElementOfMenu && this.isActivateMenu) {
      this.isActivateMenu = false;
    }
  }

  public reactiveSidebar() {
    this.isDesactiveSidebar = !this.isDesactiveSidebar;
    console.log(this.isDesactiveSidebar)
    this.isActivateSidebar$.emit(this.isDesactiveSidebar);
  }
}
