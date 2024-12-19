import { Component } from '@angular/core';
import { RoomGraphicsComponent } from "../../../shared/components/roomTools/room-graphics/room-graphics.component";
import { Seat } from '../../../shared/models/seat';
import { MovieSessionService } from '../../../admin/services/movie-session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieSession } from '../../../shared/models/movie-session';

@Component({
  selector: 'app-seat-selector',
  standalone: true,
  imports: [RoomGraphicsComponent],
  templateUrl: './seat-selector.component.html',
  styleUrl: './seat-selector.component.sass'
})
export class SeatSelectorComponent {

  seats?: Array<Seat>
  seatingRows: Array<number> = []
  seatingCols: Array<number> = []
  movieSession?: MovieSession


  constructor(private movieSessionService: MovieSessionService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.movieSessionService.getMovieSession(this.activatedRoute.snapshot.params['movie_session_id']).subscribe({
      next: (movieSession) => {


        for (let index = 1; index <= movieSession?.room?.rows!; index++) {
          this.seatingRows.push(index)

        }

        for (let index = 1; index <= movieSession?.room?.cols!; index++) {
          this.seatingCols.push(index)

        }

        this.seats = movieSession.room?.seats

        this.movieSession = movieSession
      },
      error: (err) => {

      }
    })
  }

}
