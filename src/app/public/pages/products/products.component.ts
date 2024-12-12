import { Component } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { Scroll } from '../../../shared/Utilities/Scroll';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {

  public products !: Array<Product>


  constructor(private productService: ProductService) {

  }

  ngOnInit(){
    Scroll.scrollUp()


    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log(products)
        this.products = products
      },
      error: (error) => {

      }
    })
  }

}
