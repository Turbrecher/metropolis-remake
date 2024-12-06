import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {

  constructor(private fb:FormBuilder){

  }

  createProductForm: FormGroup = this.fb.group({
    "name" : ["",[Validators.required]],
    "description" : ["",[Validators.required]],
    "price" : ["",[Validators.required]],
    "photo" : ["",[Validators.required]],
  })



  get name(){
    return this.createProductForm.get('name') as FormControl
  }

  get description(){
    return this.createProductForm.get('description') as FormControl
  }

  get price(){
    return this.createProductForm.get('price') as FormControl
  }

  get photo(){
    return this.createProductForm.get('photo') as FormControl
  }

 

}
