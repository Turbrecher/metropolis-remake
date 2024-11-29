import { Component } from '@angular/core';
import { Scroll } from '../../../shared/Utilities/Scroll';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {


  contactForm: FormGroup = this.fb.group({
    "name": ["", Validators.required],
    "surname": ["", Validators.required],
    "email": ["", Validators.required],
    "message": ["", Validators.required],
  });


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    Scroll.scrollUp()
  }

  sendMessage = ($event: Event) => {
    $event.preventDefault()

    console.log('sending message to db')
  }

  get name() {
    return this.contactForm.get('name') as FormControl
  }

  get surname() {
    return this.contactForm.get('surname') as FormControl
  }

  get email() {
    return this.contactForm.get('email') as FormControl
  }

  get message() {
    return this.contactForm.get('message') as FormControl
  }
}
