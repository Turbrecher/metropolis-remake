import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Scroll } from '../../../../shared/Utilities/Scroll';
import { RoomService } from '../../../services/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.sass'
})
export class RoomComponent {


  public createRoomForm = this.fb.group({
    "name": ["", [Validators.required]],
    "rows": ["", [Validators.required]],
    "cols": ["", [Validators.required]],
  })


  ngOnInit() {
    Scroll.scrollUp()
  }

  constructor(private fb: FormBuilder, private roomService: RoomService, private router:Router) {

  }

  createRoom(event: Event) {

    let roomData = new FormData()
    roomData.append('name', this.name.value)
    roomData.append('rows', this.rows.value)
    roomData.append('cols', this.cols.value)
    roomData.append('_method', 'POST')




    this.roomService.createRoom(roomData).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/rooms'])
      },
      error: (err) => {
        console.log(err)

      }
    })
  }


  get name() {
    return this.createRoomForm.get('name') as FormControl
  }

  get rows() {
    return this.createRoomForm.get('rows') as FormControl
  }

  get cols() {
    return this.createRoomForm.get('cols') as FormControl
  }

}
