import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from '../../../shared/components/formComponents/button/button.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.sass'
})
export class LoginModalComponent {

  loginForm: FormGroup = this.fb.group({
    "username": ["", [Validators.required]],
    "password": ["", [Validators.required]],
  })

  
  constructor(private fb: FormBuilder) {
    
  }
  @ViewChild('dialog') dialog!: ElementRef;

  openDialog(){
    this.dialog.nativeElement.showModal()
  }

  closeDialog(){
    this.dialog.nativeElement.close()
  }



  get username() {
    return this.loginForm.get('username') as FormControl
  }

  get password() {
    return this.loginForm.get('username') as FormControl
  }

}
