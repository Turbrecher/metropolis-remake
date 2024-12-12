import { Component, Input } from '@angular/core';
import { Url } from '../../../shared/Utilities/Url';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.sass'
})
export class ProductCardComponent {


  @Input() title!: string
  @Input() photo!: string
  productPhoto: string = Url.productImageApi

}
