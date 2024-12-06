import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Scroll } from '../../../../shared/Utilities/Scroll';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass'
})
export class UserComponent {

  userEditForm: FormGroup = this.fb.group({
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
    return this.userEditForm.get('username') as FormControl
  }

  
  get password() {
    return this.userEditForm.get('password') as FormControl
  }

  get email() {
    return this.userEditForm.get('email') as FormControl
  }

  get name() {
    return this.userEditForm.get('name') as FormControl
  }

  get surname() {
    return this.userEditForm.get('surname') as FormControl
  }


}
