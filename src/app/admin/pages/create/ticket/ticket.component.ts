import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.sass'
})
export class TicketComponent {

  constructor(private fb:FormBuilder){

  }

  createTicketForm: FormGroup = this.fb.group({
    "session" : ["",[Validators.required]],
    "user" : ["",[Validators.required]],
    "date" : ["",[Validators.required]],
  })



  get session(){
    return this.createTicketForm.get('session') as FormControl
  }

  get user(){
    return this.createTicketForm.get('user') as FormControl
  }

  get date(){
    return this.createTicketForm.get('date') as FormControl
  }

}
