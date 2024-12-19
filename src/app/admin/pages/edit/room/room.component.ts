import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { Validators, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../services/room.service';
import { Scroll } from '../../../../shared/Utilities/Scroll';
import { Seat } from '../../../../shared/models/seat';
import { DOCUMENT } from '@angular/common';
import { SeatGraphicComponent } from '../../../../shared/components/roomTools/seat-graphic/seat-graphic.component';
import { RoomGraphicsComponent } from '../../../../shared/components/roomTools/room-graphics/room-graphics.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, RoomGraphicsComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.sass'
})
export class RoomComponent {

  seats?: Array<Seat>
  seatingRows: Array<number> = []
  seatingCols: Array<number> = []
  @ViewChild('rowsHtml', { static: true }) rowsHtml!: ElementRef<HTMLElement>
  @ViewChild(RoomGraphicsComponent) roomGraphics!: RoomGraphicsComponent


  public editRoomForm = this.fb.group({
    "name": ["", [Validators.required]],
    "rows": ["", [Validators.required]],
    "cols": ["", [Validators.required]],
  })


  constructor(private fb: FormBuilder, private roomService: RoomService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {


    Scroll.scrollUp()


    this.roomService.getRoom(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (room) => {
        this.name.setValue(room.name)
        this.rows.setValue(room.rows)
        this.cols.setValue(room.cols)
        this.seats = room.seats

        for (let index = 1; index <= room.rows!; index++) {
          this.seatingRows.push(index)

        }

        for (let index = 1; index <= room.cols!; index++) {
          this.seatingCols.push(index)

        }

      },
      error: (err) => {
        console.log(err)

      }
    })

  }

  deleteRoom(event: Event) {
    event.preventDefault()

    if (!confirm("¿Estás seguro/a de querer eliminar esta sala?")) {
      return
    }

    this.roomService.deleteRoom(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/rooms'])
      },
      error: (err) => {
        console.log(err)

      }
    })

  }

  editRoom(event: Event) {
    event.preventDefault()

    let allSeats: Array<Seat> = this.roomGraphics.getAllSeats()



    let roomData = new FormData()
    roomData.append('name', this.name.value)
    roomData.append('rows', this.rows.value)
    roomData.append('cols', this.cols.value)
    roomData.append('allSeats', JSON.stringify(allSeats))

    roomData.append('_method', 'PUT')


    this.roomService.editRoom(roomData, this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/rooms'])
      },
      error: (err) => {
        console.log(err)

      }
    })
  }

  get name() {
    return this.editRoomForm.get('name') as FormControl
  }

  get rows() {
    return this.editRoomForm.get('rows') as FormControl
  }

  get cols() {
    return this.editRoomForm.get('cols') as FormControl
  }
}
