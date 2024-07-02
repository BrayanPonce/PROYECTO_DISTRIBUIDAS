import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements AfterViewInit {
  isViewPassword: boolean = false;
  @ViewChild('password') passwordElement: ElementRef = {} as ElementRef;
  user: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private notifySrv: NotifyService
  ) { }

  ngAfterViewInit(): void {
    this.updatePasswordFieldType();
  }

  public togglePasswordVisibility() {
    this.isViewPassword = !this.isViewPassword;
    this.updatePasswordFieldType();
  }

  private updatePasswordFieldType(): void {
    if (this.passwordElement && this.passwordElement.nativeElement) {
      this.passwordElement.nativeElement.type = this.isViewPassword ? 'text' : 'password';
    }
  }

  public login() {
    let { value } = this.user;
    if (value.username == "clinica.josue" && value.password == "terapia123") {
      this.router.navigate(['home']);
    } else {
      this.notifySrv.addNotification({
        status: 'error',
        message: 'Credenciales incorrectas'
      });
    }
  }
}
