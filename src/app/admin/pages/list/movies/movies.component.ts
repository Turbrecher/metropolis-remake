import { Component } from '@angular/core';
import { MovieCardComponent } from "../../../components/movie-card/movie-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.sass'
})
export class MoviesComponent {

}
