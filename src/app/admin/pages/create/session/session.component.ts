import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.sass'
})
export class SessionComponent {

  constructor(private fb:FormBuilder){

  }

  createSessionForm: FormGroup = this.fb.group({
    "movie" : ["",[Validators.required]],
    "time" : ["",[Validators.required]],
    "room" : ["",[Validators.required]],
  })



  get movie(){
    return this.createSessionForm.get('movie') as FormControl
  }

  get time(){
    return this.createSessionForm.get('time') as FormControl
  }

  get room(){
    return this.createSessionForm.get('room') as FormControl
  }

}
