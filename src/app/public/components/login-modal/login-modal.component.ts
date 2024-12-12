import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from '../../../shared/components/formComponents/button/button.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.sass'
})
export class LoginModalComponent {

  serverError: string = ""

  loginForm: FormGroup = this.fb.group({
    "email": ["", [Validators.required]],
    "password": ["", [Validators.required]],
  })


  constructor(private fb: FormBuilder, private authService: AuthService, private cookieService: CookieService, private router: Router) {

  }

  //Function that creates the auth token. (It uses an observable in order to navigate right after the cookie is set)
  addToken(token: string) {
    this.cookieService.set("token", token)

    return of(token)
  }

  login(event: Event) {
    event.preventDefault()

    let loginData = new FormData()

    loginData.append('email', this.email.value)
    loginData.append('password', this.password.value)
    loginData.append('_method', 'POST')


    this.authService.login(loginData).subscribe({
      next: async (response: any) => {
        this.addToken(response.token).subscribe(
          () => {
            this.router.navigate(['/bilboard'])
            location.reload()
          }
        )
      },
      error: (error) => {
        this.serverError = "Ha ocurrido un problema en el servidor. ¡Asegúrese de haber escrito bien sus credenciales!."
      }
    })


  }



  @ViewChild('dialog') dialog!: ElementRef;

  openDialog() {
    this.dialog.nativeElement.showModal()
  }

  closeDialog() {
    this.dialog.nativeElement.close()
  }

  get email() {
    return this.loginForm.get('email') as FormControl
  }

  get password() {
    return this.loginForm.get('password') as FormControl
  }

}
