import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginModalComponent } from "../../../public/components/login-modal/login-modal.component";
import { RegisterModalComponent } from "../../../public/components/register-modal/register-modal.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginModalComponent, RegisterModalComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {

  @ViewChild(LoginModalComponent) loginDialog!: LoginModalComponent
  @ViewChild(RegisterModalComponent) registerDialog!: RegisterModalComponent
  isAuthenticated = true


  openLoginModal() {
    this.loginDialog.openDialog()
  }

  openRegisterModal(){
    this.registerDialog.openDialog()
  }

}
