import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.sass'
})
export class SessionComponent {
  constructor(private fb:FormBuilder){

  }

  editSessionForm: FormGroup = this.fb.group({
    "movie" : ["",[Validators.required]],
    "time" : ["",[Validators.required]],
    "room" : ["",[Validators.required]],
  })



  get movie(){
    return this.editSessionForm.get('movie') as FormControl
  }

  get time(){
    return this.editSessionForm.get('time') as FormControl
  }

  get room(){
    return this.editSessionForm.get('room') as FormControl
  }
}
