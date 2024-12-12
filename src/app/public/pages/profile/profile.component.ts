import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Scroll } from '../../../shared/Utilities/Scroll';
import { TicketComponent } from "../../components/ticket/ticket.component";
import { AuthService } from '../../services/auth.service';
import { Ticket } from '../../../shared/models/ticket';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule, TicketComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {


  profileForm: FormGroup = this.fb.group({
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "username": ["", Validators.required],
    "email": ["", Validators.required],
    "password": ["",[Validators.pattern("^[A-Za-z0-9?¿_-]{5,50}|^$/")]],
  });

  serverError:string = ""
  tickets!: Array<Ticket>

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  ngOnInit() {
    this.serverError = ""
    Scroll.scrollUp()


    this.authService.profile().subscribe({
      next: (user) => {
        this.name.setValue(user.name)
        this.surname.setValue(user.surname)
        this.username.setValue(user.username)
        this.email.setValue(user.email)
        this.tickets = user.tickets
      },

      error: (err) => {

      }
    })
  }



  editProfile(event: Event) {
    let profileData = new FormData()
    profileData.append('name', this.name.value)
    profileData.append('surname', this.surname.value)
    profileData.append('username', this.username.value)
    profileData.append('email', this.email.value)
    profileData.append('_method', "PUT")


    if (this.password.value != "") {

      profileData.append('password', this.password.value)
    }

    this.authService.editProfile(profileData).subscribe({
      next: (response) => {
        this.ngOnInit()

      },
      error: (err) => {
        this.serverError = "Ha ocurrido un error en el servidor, no se ha podido actualizar tu perfil."
      }
    })
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
