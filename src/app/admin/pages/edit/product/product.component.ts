import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";

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

  editProductForm: FormGroup = this.fb.group({
    "name" : ["",[Validators.required]],
    "description" : ["",[Validators.required]],
    "price" : ["",[Validators.required]],
    "photo" : ["",[Validators.required]],
  })



  get name(){
    return this.editProductForm.get('name') as FormControl
  }

  get description(){
    return this.editProductForm.get('description') as FormControl
  }

  get price(){
    return this.editProductForm.get('price') as FormControl
  }

  get photo(){
    return this.editProductForm.get('photo') as FormControl
  }

}
