import { Component, Input } from '@angular/core';
import { Url } from '../../../shared/Utilities/Url';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.sass'
})
export class TicketComponent {

  public portraitUrl = Url.portraitApi

  @Input() moviePortrait !: string
  @Input() movieTitle !: string
  @Input() time !: string
  @Input() date !: string
  @Input() row !: string
  @Input() column !: string

}
