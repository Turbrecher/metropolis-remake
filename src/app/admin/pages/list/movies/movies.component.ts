import { Component } from '@angular/core';
import { MovieCardComponent } from "../../../components/movie-card/movie-card.component";
import { RouterLink } from '@angular/router';
import { Movie } from '../../../../shared/models/movie';
import { MovieService } from '../../../services/movie.service';
import { Scroll } from '../../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.sass'
})
export class MoviesComponent {

  movies !: Array<Movie>


  constructor(private movieService: MovieService) {

  }

  ngOnInit() {

    Scroll.scrollUp()


    this.movieService.getMovies().subscribe(
      (movies) => {
        this.movies = movies
        console.log(movies)
      }
    )
  }

}
