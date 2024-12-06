import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormGroup, Validators, FormBuilder, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Scroll } from '../../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass'
})
export class UserComponent {

  userCreateForm: FormGroup = this.fb.group({
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "username": ["", Validators.required],
    "email": ["", Validators.required],
    "password": ["", Validators.required],
  });


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    Scroll.scrollUp()
  }



  createUser(event: Event) {

  }

  get username() {
    return this.userCreateForm.get('username') as FormControl
  }

  
  get password() {
    return this.userCreateForm.get('password') as FormControl
  }

  get email() {
    return this.userCreateForm.get('email') as FormControl
  }

  get name() {
    return this.userCreateForm.get('name') as FormControl
  }

  get surname() {
    return this.userCreateForm.get('surname') as FormControl
  }

}
