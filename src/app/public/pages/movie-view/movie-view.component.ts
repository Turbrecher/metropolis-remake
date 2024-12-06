import { Component } from '@angular/core';
import { TicketComponent } from "../../components/ticket/ticket.component";
import { Scroll } from '../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-movie-view',
  standalone: true,
  imports: [TicketComponent],
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.sass'
})
export class MovieViewComponent {

  ngOnInit(){
    Scroll.scrollUp()
  }

}
