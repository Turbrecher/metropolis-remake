import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Seat } from '../../../models/seat';
import { SeatGraphicComponent } from "../seat-graphic/seat-graphic.component";
import { MovieSession } from '../../../models/movie-session';

@Component({
  selector: 'app-room-graphics',
  standalone: true,
  imports: [SeatGraphicComponent],
  templateUrl: './room-graphics.component.html',
  styleUrl: './room-graphics.component.sass'
})
export class RoomGraphicsComponent {

  @Input() seatingRows !: Array<number>
  @Input() seatingCols !: Array<number>
  @Input() seats !: Array<Seat> | undefined
  @Input() publicSelector: boolean = false
  @Input() movieSession?: MovieSession
  private moreThanOneTime = false


  ngOnInit() {
    this.moreThanOneTime = false
  }



  //Function that applies a click event to every node that is passed as parameter.
  changeSeatType(node: Element) {

    node.addEventListener('click', () => {
      if (node.className == "seat") {
        node.className = "corridor"
      } else if (node.className == "seat ng-star-inserted") {
        node.className = "corridor"
      } else {
        node.className = "seat"

      }
    })
  }

  ///Function that retrieves all seats info of the room's graphics.
  getAllSeats() {
    let seats = document.querySelectorAll('.seat')
    let corridors = document.querySelectorAll('.corridor')
    let allTypesOfSeats: Array<Seat> = []


    corridors.forEach((corridor) => {
      let corridorJSON: Seat = {
        id: Number(corridor.id),
        type: corridor.className,
        row: Number(corridor.children.item(0)?.innerHTML),
        col: Number(corridor.children.item(1)?.innerHTML)
      }

      allTypesOfSeats.push(corridorJSON)
    })

    seats.forEach((seat) => {
      let seatJSON: Seat = {
        id: Number(seat.id),
        type: seat.className,
        row: Number(seat.children.item(0)?.innerHTML),
        col: Number(seat.children.item(1)?.innerHTML)
      }

      allTypesOfSeats.push(seatJSON)
    })



    return allTypesOfSeats

  }


  //End of life cycle operation.
  ngAfterContentChecked() {

    //If the operation was previously executed.
    if (this.moreThanOneTime) {
      return//Abort operation.
    }

    let seats = document.querySelectorAll('.seat')
    let corridors = document.querySelectorAll('.corridor')
    let allTypesOfSeats: Array<Element> = [];


    //If seats and corridors couldn't be found.
    if (seats.length <= 0 && corridors.length <= 0) {
      return//Abort operation
    }

    //Combine seats and corridors.
    seats.forEach((node) => {
      allTypesOfSeats.push(node)
    })
    corridors.forEach((node) => {
      allTypesOfSeats.push(node)
    })


    //Assign an on click event to all seats and corridors.
    allTypesOfSeats.forEach((node) => {

      this.changeSeatType(node)


    })

    this.moreThanOneTime = true//Tell the component that the operation has been successfully executed.


  }

}
