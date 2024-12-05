import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Scroll } from '../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {


  profileForm: FormGroup = this.fb.group({
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



  editProfile(event: Event) {

  }

  get username() {
    return this.profileForm.get('username') as FormControl
  }

  
  get password() {
    return this.profileForm.get('password') as FormControl
  }

  get email() {
    return this.profileForm.get('email') as FormControl
  }

  get name() {
    return this.profileForm.get('name') as FormControl
  }

  get surname() {
    return this.profileForm.get('surname') as FormControl
  }

  
}
