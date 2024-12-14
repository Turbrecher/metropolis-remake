import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from "../../../../shared/components/formComponents/select/select.component";
import { MovieService } from '../../../services/movie.service';
import { SelectOption } from '../../../../shared/models/select-option';
import { RoomService } from '../../../services/room.service';
import { MovieSessionService } from '../../../services/movie-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule, SelectComponent],
  templateUrl: './session.component.html',
  styleUrl: './session.component.sass'
})
export class SessionComponent {



  movieOptions: Array<SelectOption> = []
  roomOptions: Array<SelectOption> = []

  constructor(private fb: FormBuilder, private movieService: MovieService, private roomService: RoomService, private movieSessionService: MovieSessionService, private router: Router) {

  }

  createSessionForm: FormGroup = this.fb.group({
    "movie": ["", [Validators.required]],
    "time": ["", [Validators.required]],
    "room": ["", [Validators.required]],
  })

  ngOnInit() {


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


  createSession(event: Event) {
    event.preventDefault()

    let movieSessionData = new FormData()

    movieSessionData.append('movie_id', this.movie.value)
    movieSessionData.append('room_id', this.room.value)
    movieSessionData.append('time', this.time.value)
    movieSessionData.append('_method', 'POST')

    this.movieSessionService.createMovieSession(movieSessionData).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['/admin/sessions'])
      },
      error: (err) => {
        console.log(err)
      }
    })




  }



  get movie() {
    return this.createSessionForm.get('movie') as FormControl
  }

  get time() {
    return this.createSessionForm.get('time') as FormControl
  }

  get room() {
    return this.createSessionForm.get('room') as FormControl
  }

}
