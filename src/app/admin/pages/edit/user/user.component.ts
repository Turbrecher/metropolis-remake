import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Scroll } from '../../../../shared/Utilities/Scroll';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass'
})
export class UserComponent {

  isAdmin: boolean = false
  @ViewChild('deleteButton') deleteButton : any

  userEditForm: FormGroup = this.fb.group({
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "username": ["", Validators.required],
    "email": ["", Validators.required],
    "password": ["", []],
  });


  constructor(private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    Scroll.scrollUp()

    this.userService.getUser(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (user) => {
        console.log(user)
        this.name.setValue(user.name)
        this.surname.setValue(user.surname)
        this.username.setValue(user.username)
        this.email.setValue(user.email)

        //If user is admin, hidde delete button
        if (user.roles[0].name == "admin") {
           console.log(this.deleteButton.extraClass = "hidden")
        }
      },
      error: (err) => {

      }
    })

  }

  deleteUser(event: Event) {
    event.preventDefault()

    if (!confirm("¿Estás seguro de querer eliminar este usuario?")) {
      return
    }

    this.userService.deleteUser(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/users'])
        console.log(response)
      },
      error: (err) => {
        console.log(err)

      }
    })

  }



  editUser(event: Event) {

    let userData = new FormData()
    userData.append('name', this.name.value)
    userData.append('surname', this.surname.value)
    userData.append('username', this.username.value)
    userData.append('email', this.email.value)
    userData.append('role', 'user')
    userData.append('_method', 'PUT')

    if (this.password.value != "") {
      userData.append('password', this.password.value)
    }

    this.userService.editUser(this.activatedRoute.snapshot.params['id'], userData).subscribe({
      next: (response) => {
        this.ngOnInit()
        console.log(response)
      },
      error: (err) => {
        console.log(err)

      }
    })

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
