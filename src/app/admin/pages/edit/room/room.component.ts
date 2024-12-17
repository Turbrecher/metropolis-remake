import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { Validators, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../services/room.service';
import { Scroll } from '../../../../shared/Utilities/Scroll';
import { Seat } from '../../../../shared/models/seat';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.sass'
})
export class RoomComponent {

  private mouseClicked = false
  private moreThanOneTime = false
  seats?: Array<Seat>
  seatingRows: Array<number> = []
  seatingCols: Array<number> = []
  @ViewChild('rowsHtml', { static: true }) rowsHtml!: ElementRef<HTMLElement>


  public editRoomForm = this.fb.group({
    "name": ["", [Validators.required]],
    "rows": ["", [Validators.required]],
    "cols": ["", [Validators.required]],
  })


  constructor(private fb: FormBuilder, private roomService: RoomService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {


    Scroll.scrollUp()
    this.moreThanOneTime = false


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

  editRoom(event: Event) {

    let roomData = new FormData()
    roomData.append('name', this.name.value)
    roomData.append('rows', this.rows.value)
    roomData.append('cols', this.cols.value)
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


  ngAfterContentChecked() {

    if (this.moreThanOneTime) {
      return
    }


    
    
    
    let seats = document.querySelectorAll('.seat')
    let corridors = document.querySelectorAll('.corridor')
    let allTypesOfSeats: Array<Element> = [];

    if (seats.length <= 0 && corridors.length <= 0) {
      return
    }

    seats.forEach((node) => {
      allTypesOfSeats.push(node)
    })
    corridors.forEach((node) => {
      allTypesOfSeats.push(node)
    })

    allTypesOfSeats.forEach((node) => {

      this.changeSeatType(node)


    })

    this.moreThanOneTime = true


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
