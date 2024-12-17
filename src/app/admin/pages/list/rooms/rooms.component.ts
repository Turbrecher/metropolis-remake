import { Component } from '@angular/core';
import { RoomCardComponent } from "../../../components/room-card/room-card.component";
import { RouterLink } from '@angular/router';
import { Room } from '../../../../shared/models/room';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomCardComponent, RouterLink],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.sass'
})
export class RoomsComponent {

  rooms !: Array<Room>;

  constructor(private roomService: RoomService) {

  }

  ngOnInit() {
    this.roomService.getRooms().subscribe({
      next: (rooms) => {
        console.log(rooms)
        this.rooms = rooms
      },
      error: (err) => {

      }
    })

  }

}
