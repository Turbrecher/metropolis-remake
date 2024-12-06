import { Component } from '@angular/core';
import { ProductCardComponent } from "../../../components/product-card/product-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {

}
