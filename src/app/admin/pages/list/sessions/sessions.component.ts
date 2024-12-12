import { Component } from '@angular/core';
import { SessionCardComponent } from "../../../components/session-card/session-card.component";
import { RouterLink } from '@angular/router';
import { MovieSessionService } from '../../../services/movie-session.service';
import { MovieSession } from '../../../../shared/models/movie-session';
import { Scroll } from '../../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [SessionCardComponent, RouterLink],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.sass'
})
export class SessionsComponent {

  movieSessions !: Array<MovieSession>


  constructor(private movieSessionService: MovieSessionService) {

  }

  ngOnInit() {
    Scroll.scrollUp()


    this.movieSessionService.getAllMovieSessions().subscribe({
      next: (movieSessions) => {
        this.movieSessions = movieSessions
      },
      error: () => {

      }
    })
  }

}
