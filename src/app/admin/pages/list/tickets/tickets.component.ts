import { Component } from '@angular/core';
import { TicketCardComponent } from "../../../components/ticket-card/ticket-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TicketCardComponent, RouterLink],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.sass'
})
export class TicketsComponent {

}
