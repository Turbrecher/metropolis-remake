import { Component, Pipe } from '@angular/core';
import { Scroll } from '../../../shared/Utilities/Scroll';
import { Movie } from '../../../shared/models/movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from '../../../shared/Utilities/Url';
import { MovieSession } from '../../../shared/models/movie-session';
import { MovieSessionComponent } from '../../components/movie-session/movie-session.component';
import { SafePipe } from '../../../shared/pipes/safe.pipe';

@Component({
  selector: 'app-movie-view',
  standalone: true,
  imports: [MovieSessionComponent, SafePipe],
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.sass'
})
export class MovieViewComponent {


  public movie !: Movie
  public movieSessions?: Array<MovieSession>
  public portraitApi !: string
  public trailer!: string


  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    Scroll.scrollUp()
    this.portraitApi = Url.portraitApi


    this.movieService.getMovie(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (movie) => {
        this.movie = movie
        this.movieSessions = this.movie.movie_sessions

        this.trailer = ("https://www.youtube.com/embed/" + movie.trailer!.split('=')[1])
        console.log("https://www.youtube.com/embed/" + movie.trailer!.split('=')[1])
      },
      error: (err) => {
        this.router.navigate(['/bilboard'])
      }
    })

  }


  getTrailer() {
    return
  }

}
