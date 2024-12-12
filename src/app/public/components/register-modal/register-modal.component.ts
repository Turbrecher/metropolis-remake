import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../shared/components/formComponents/input/input.component';
import { ButtonComponent } from '../../../shared/components/formComponents/button/button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputComponent, ButtonComponent],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.sass'
})
export class RegisterModalComponent {


  registerForm: FormGroup = this.fb.group({
    "email": ["", [Validators.required]],
    "password": ["", [Validators.required]],
  })

  serverError: string = ""

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  register(event: Event) {
    event.preventDefault()

    let registerData = new FormData()

    registerData.append('email', this.email.value)
    registerData.append('password', this.password.value)
    registerData.append('_method', 'POST')


    this.authService.register(registerData).subscribe({
      next: (response) => {
        location.reload()
      },
      error: (error) => {
        this.serverError = "Ha ocurrido un problema en el servidor. Esto puede deberse a que su email ya existe en nuestra base de datos."
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
    return this.registerForm.get('email') as FormControl
  }

  get password() {
    return this.registerForm.get('password') as FormControl
  }
}
