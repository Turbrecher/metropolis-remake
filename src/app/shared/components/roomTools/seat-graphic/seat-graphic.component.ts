import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Seat } from '../../../models/seat';

@Component({
  selector: 'app-seat-graphic',
  standalone: true,
  imports: [],
  templateUrl: './seat-graphic.component.html',
  styleUrl: './seat-graphic.component.sass'
})
export class SeatGraphicComponent {

  @Input() seat !: Seat

}
