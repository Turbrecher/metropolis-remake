import { Component, Input } from '@angular/core';
import { Url } from '../../../shared/Utilities/Url';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {

  @Input() title !: string
  @Input() description !: string
  @Input() photo !: string
  @Input() price !: string
  productImageUrl!: string


  ngOnInit(){
    this.productImageUrl = Url.productImageApi
  }

}
