import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormGroup, Validators, FormBuilder, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Scroll } from '../../../../shared/Utilities/Scroll';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

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


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    Scroll.scrollUp()
  }



  createUser(event: Event) {

    let userData = new FormData()
    userData.append('name', this.name.value)
    userData.append('surname', this.surname.value)
    userData.append('username', this.username.value)
    userData.append('email', this.email.value)
    userData.append('password', this.password.value)
    userData.append('role', 'user')
    userData.append('_method', 'POST')

    this.userService.createUser(userData).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/users'])
      },
      error: (err) => {
        console.log(err)

      }
    })

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
