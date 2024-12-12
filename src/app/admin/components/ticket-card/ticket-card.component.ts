import { Component, Input } from '@angular/core';
import { Url } from '../../../shared/Utilities/Url';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.sass'
})
export class TicketCardComponent {

  @Input() movieTitle !: string
  @Input() time !: string
  @Input() date !: string
  @Input() row !: string
  @Input() col !: string
  @Input() portrait !: string
  portraitApi: string = Url.portraitApi

}
