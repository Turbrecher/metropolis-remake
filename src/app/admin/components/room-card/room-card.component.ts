import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.sass'
})
export class RoomCardComponent {

  @Input() name !: string | undefined
  @Input() rows !: string | undefined
  @Input() cols !: string | undefined


}
