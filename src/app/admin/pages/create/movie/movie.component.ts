import { Component } from '@angular/core';
import { fadeInScaleAnimationAdmin } from '../../../../shared/animations/fade-in-scale-admin';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.sass',
  animations: [
    fadeInScaleAnimationAdmin
  ]
})
export class MovieComponent {

  portraitFile!: File

  constructor(private fb: FormBuilder, private movieService: MovieService) {

  }

  createMovieForm: FormGroup = this.fb.group({
    "title": ["", [Validators.required]],
    "synopsis": ["", [Validators.required]],
    "actors": ["", [Validators.required]],
    "directors": ["", [Validators.required]],
    "duration": ["", [Validators.required]],
    "releaseDate": ["", [Validators.required]],
    "genres": ["", [Validators.required]],
    "pegi": ["", [Validators.required]],
    "portrait": ["", [Validators.required]],
    "trailer": ["", [Validators.required]],
  })


  getPortrait(event: any) {
    this.portraitFile = event.target.files[0]
  }


  createMovie(event: Event) {

    event.preventDefault()
    let movieData = new FormData()

    movieData.append("title", this.title.value)
    movieData.append("synopsis", this.synopsis.value)
    movieData.append("actors", this.actors.value)
    movieData.append("directors", this.directors.value)
    movieData.append("duration", this.duration.value)
    movieData.append("releaseDate", this.releaseDate.value)
    movieData.append("genres", this.genres.value)
    movieData.append("pegi", this.pegi.value)
    movieData.append("genres", this.genres.value)
    movieData.append("portrait", this.portraitFile, this.portraitFile.name)
    movieData.append("trailer", this.trailer.value)
    movieData.append("_method", "POST")


    this.movieService.createMovie(movieData).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {

      }
    })
  }



  get title() {
    return this.createMovieForm.get('title') as FormControl
  }

  get synopsis() {
    return this.createMovieForm.get('synopsis') as FormControl
  }

  get actors() {
    return this.createMovieForm.get('actors') as FormControl
  }

  get directors() {
    return this.createMovieForm.get('directors') as FormControl
  }

  get duration() {
    return this.createMovieForm.get('duration') as FormControl
  }

  get releaseDate() {
    return this.createMovieForm.get('releaseDate') as FormControl
  }

  get genres() {
    return this.createMovieForm.get('genres') as FormControl
  }

  get pegi() {
    return this.createMovieForm.get('pegi') as FormControl
  }

  get portrait() {
    return this.createMovieForm.get('portrait') as FormControl
  }

  get trailer() {
    return this.createMovieForm.get('trailer') as FormControl
  }
}
