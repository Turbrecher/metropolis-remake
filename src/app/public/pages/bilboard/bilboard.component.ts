import { Component } from '@angular/core';
import { MovieComponent } from "../../components/movie/movie.component";
import { RouterLink } from '@angular/router';
import { Scroll } from '../../../shared/Utilities/Scroll';
import { TicketComponent } from "../../components/ticket/ticket.component";

@Component({
  selector: 'app-bilboard',
  standalone: true,
  imports: [MovieComponent, RouterLink, TicketComponent],
  templateUrl: './bilboard.component.html',
  styleUrl: './bilboard.component.sass'
})
export class BilboardComponent {

  ngOnInit(){
    Scroll.scrollUp()
  }
}
