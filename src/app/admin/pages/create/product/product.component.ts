import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Scroll } from '../../../../shared/Utilities/Scroll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {

  photoFile !: File

  ngOnInit() {
    Scroll.scrollUp()
  }

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {

  }

  createProductForm: FormGroup = this.fb.group({
    "name": ["", [Validators.required]],
    "description": ["", [Validators.required]],
    "price": ["", [Validators.required]],
    "photo": ["", [Validators.required]],
  })


  createProduct(event: Event) {
    event?.preventDefault()

    let productData = new FormData()
    productData.append('name', this.name.value)
    productData.append('description', this.description.value)
    productData.append('price', this.price.value)
    productData.append('photo', this.photoFile, this.photoFile.name)
    productData.append('_method', 'POST')


    this.productService.createProduct(productData).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/products'])
      },
      error: (err) => {
        console.log(err)
      }
    })

  }


  getPhotoFile(event: any) {
    this.photoFile = event.target.files[0]

  }


  get name() {
    return this.createProductForm.get('name') as FormControl
  }

  get description() {
    return this.createProductForm.get('description') as FormControl
  }

  get price() {
    return this.createProductForm.get('price') as FormControl
  }

  get photo() {
    return this.createProductForm.get('photo') as FormControl
  }



}
