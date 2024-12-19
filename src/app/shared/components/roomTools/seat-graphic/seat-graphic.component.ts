import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Seat } from '../../../models/seat';
import { MovieSession } from '../../../models/movie-session';

@Component({
  selector: 'app-seat-graphic',
  standalone: true,
  imports: [],
  templateUrl: './seat-graphic.component.html',
  styleUrl: './seat-graphic.component.sass'
})
export class SeatGraphicComponent {

  @Input() seat !: Seat
  @Input() movieSession?: MovieSession
  @Input() publicSelector: boolean = false


  ngOnInit() {

  }

  constructor() {

  }


  isSeatOcupied() {
    let occupied = false

    this.movieSession?.tickets?.forEach(
      (ticket) => {

        if (ticket.seat?.id == this.seat.id) {
          occupied = true

        } else {
          
        }
      })


    return occupied
  }

}
