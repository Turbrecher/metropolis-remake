import { Component } from '@angular/core';
import { ProductCardComponent } from "../../../components/product-card/product-card.component";
import { RouterLink } from '@angular/router';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../../services/product.service';
import { Scroll } from '../../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  products !: Array<Product>


  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    Scroll.scrollUp()


    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products
      }
    )
  }
}
