import { Component } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { Scroll } from '../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {

  ngOnInit(){
    Scroll.scrollUp()
  }

}
