import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {

  @Input() title : string = "DIARIO"
  @Input() description : string = "¡LUNES, MARTES Y JUEVES!"
  @Input() portrait : string = "images/productos/palomitas.webp"
  @Input() price : string = "5.99 €"
}
