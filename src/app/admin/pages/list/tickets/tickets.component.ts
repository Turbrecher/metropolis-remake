import { Component } from '@angular/core';
import { TicketCardComponent } from "../../../components/ticket-card/ticket-card.component";
import { RouterLink } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';
import { Ticket } from '../../../../shared/models/ticket';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TicketCardComponent, RouterLink],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.sass'
})
export class TicketsComponent {


  tickets !: Array<Ticket>

  constructor(private ticketService: TicketService) {

  }

  ngOnInit() {
    this.ticketService.getTickets().subscribe({
      next: (tickets) => {
        console.log(tickets)
        this.tickets = tickets
      },
      error: (err) => {

      }
    })
  }
}
