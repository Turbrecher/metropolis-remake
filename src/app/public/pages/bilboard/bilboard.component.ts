import { Component } from '@angular/core';
import { MovieComponent } from "../../components/movie/movie.component";
import { RouterLink } from '@angular/router';
import { Scroll } from '../../../shared/Utilities/Scroll';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'app-bilboard',
  standalone: true,
  imports: [MovieComponent, RouterLink],
  templateUrl: './bilboard.component.html',
  styleUrl: './bilboard.component.sass'
})
export class BilboardComponent {

  public movies !: Array<Movie>


  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    Scroll.scrollUp()

    this.movieService.getMovies().subscribe({
      next: (movies) => {
        console.log(movies[0].movie_sessions)
        this.movies = movies
      },
      error: (error) => {

      }
    })

  }
}
