import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Scroll } from '../../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {


  photoFile !: File

  constructor(private fb: FormBuilder, private productService: ProductService, private activatedRoute: ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    Scroll.scrollUp()


    this.productService.getProduct(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (product) => {
        this.name.setValue(product.name)
        this.description.setValue(product.description)
        this.price.setValue(product.price)
      },
      error: (err) => {

      }
    })
  }

  editProductForm: FormGroup = this.fb.group({
    "name": ["", [Validators.required]],
    "description": ["", [Validators.required]],
    "price": ["", [Validators.required]],
    "photo": ["", []],
  })


  editProduct(event: Event) {
    event?.preventDefault()

    let productData = new FormData()
    productData.append('name', this.name.value)
    productData.append('description', this.description.value)
    productData.append('price', this.price.value)
    productData.append('_method', 'PUT')

    if (this.photo.value != "") {
      productData.append('photo', this.photoFile, this.photoFile.name)
    }

    this.productService.editProduct(this.activatedRoute.snapshot.params['id'], productData).subscribe({
      next: (response) => {
        console.log(response)
        this.ngOnInit()
      },
      error: (err) => {
        console.log(err)
      }
    })

  }


  deleteProduct(event: Event) {
    event?.preventDefault()

    if(!confirm("¿Estás seguro/a de querer eliminar este producto?")){
      return
    }


    this.productService.deleteProduct(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        console.log(response)
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
    return this.editProductForm.get('name') as FormControl
  }

  get description() {
    return this.editProductForm.get('description') as FormControl
  }

  get price() {
    return this.editProductForm.get('price') as FormControl
  }

  get photo() {
    return this.editProductForm.get('photo') as FormControl
  }

}
