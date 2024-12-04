import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../shared/components/formComponents/input/input.component';
import { ButtonComponent } from '../../../shared/components/formComponents/button/button.component';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputComponent, ButtonComponent],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.sass'
})
export class RegisterModalComponent {


  registerForm: FormGroup = this.fb.group({
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
    return this.registerForm.get('username') as FormControl
  }

  get password() {
    return this.registerForm.get('username') as FormControl
  }
}
