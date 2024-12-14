import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { SelectComponent } from '../../../../shared/components/formComponents/select/select.component';
import { SelectOption } from '../../../../shared/models/select-option';
import { MovieService } from '../../../services/movie.service';
import { RoomService } from '../../../services/room.service';
import { MovieSessionService } from '../../../services/movie-session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule, SelectComponent],
  templateUrl: './session.component.html',
  styleUrl: './session.component.sass'
})
export class SessionComponent {

  movieOptions: Array<SelectOption> = []
  roomOptions: Array<SelectOption> = []

  constructor(private fb: FormBuilder, private movieService: MovieService, private roomService: RoomService, private movieSessionService: MovieSessionService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    //load session data:
    this.movieSessionService.getMovieSession(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (movieSession) => {
        this.movie.setValue(movieSession.movie?.id)
        this.room.setValue(movieSession.room?.id)
        this.time.setValue(movieSession.time)
      },
      error: (err) => {

      }
    })


    //Add movie options.
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        movies.forEach((movie) => {
          this.movieOptions.push({
            "name": movie.title,
            "id": movie.id
          })
        })
      },
      error: (err) => {

      }
    })


    //Add room options.
    this.roomService.getRooms().subscribe({
      next: (rooms) => {
        rooms.forEach((room) => {
          this.roomOptions.push({
            "name": room.name,
            "id": room.id
          })
        })
      },
      error: (err) => {

      }
    })
  }

  deleteSession(event: Event) {
    if (!confirm("¿Estás seguro/a de querer eliminar esta sesión?")) {
      return
    }

    this.movieSessionService.deleteMovieSession(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['/admin/sessions'])
      },
      error: (err) => {

      }
    })

  }


  editSession(event: Event) {
    event.preventDefault()

    let movieSessionData = new FormData()

    movieSessionData.append('movie_id', this.movie.value)
    movieSessionData.append('room_id', this.room.value)
    movieSessionData.append('time', this.time.value)
    movieSessionData.append('_method', 'PUT')

    this.movieSessionService.editMovieSession(movieSessionData, this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err)
      }
    })




  }

  editSessionForm: FormGroup = this.fb.group({
    "movie": ["", [Validators.required]],
    "time": ["", [Validators.required]],
    "room": ["", [Validators.required]],
  })



  get movie() {
    return this.editSessionForm.get('movie') as FormControl
  }

  get time() {
    return this.editSessionForm.get('time') as FormControl
  }

  get room() {
    return this.editSessionForm.get('room') as FormControl
  }
}
