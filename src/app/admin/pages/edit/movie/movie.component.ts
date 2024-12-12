import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Scroll } from '../../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.sass'
})
export class MovieComponent {

  id?: number
  portraitFile !: File

  constructor(private fb: FormBuilder, private movieService: MovieService, private activatedRoute: ActivatedRoute, private router:Router) {

  }

  getPortrait(event: any) {
    this.portraitFile = event.target.files[0]
  }

  ngOnInit() {
    Scroll.scrollUp()


    this.movieService.getMovie(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (movie) => {
        this.title.setValue(movie.title)
        this.synopsis.setValue(movie.synopsis)
        this.actors.setValue(movie.actors)
        this.directors.setValue(movie.directors)
        this.duration.setValue(movie.duration)
        this.releaseDate.setValue(movie.releaseDate)
        this.genres.setValue(movie.genres)
        this.pegi.setValue(movie.pegi)
        this.trailer.setValue(movie.trailer)
        this.id = movie?.id

      },
      error: (err) => {

      }
    })
  }

  editMovieForm: FormGroup = this.fb.group({
    "title": ["", [Validators.required]],
    "synopsis": ["", [Validators.required]],
    "actors": ["", [Validators.required]],
    "directors": ["", [Validators.required]],
    "duration": ["", [Validators.required]],
    "releaseDate": ["", [Validators.required]],
    "genres": ["", [Validators.required]],
    "pegi": ["", [Validators.required]],
    "trailer": ["", [Validators.required]],
    "portrait": ["", []]
  })

  deleteMovie(event: Event){
    event.preventDefault()

    //Confirm deletion
    if(!confirm("¿Estás seguro/a de querer  borrar esta película?")){
      return
    }

    this.movieService.deleteMovie(this.activatedRoute.snapshot.params['id']).subscribe({
      next:(response)=>{
        this.router.navigate(['/admin/movies'])
      },
      error:(err)=>{

      }
    })
  }


  editMovie(event: Event) {
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
    movieData.append("trailer", this.trailer.value)
    movieData.append("_method", "PUT")

    if (this.portrait.value != "") {
      movieData.append("portrait", this.portraitFile, this.portraitFile.name)
    }


    this.movieService.editMovie(movieData, this.id).subscribe({
      next: (response) => {
        this.ngOnInit()
      },
      error: (err) => {

      }
    })
  }


  get title() {
    return this.editMovieForm.get('title') as FormControl
  }

  get synopsis() {
    return this.editMovieForm.get('synopsis') as FormControl
  }

  get actors() {
    return this.editMovieForm.get('actors') as FormControl
  }

  get directors() {
    return this.editMovieForm.get('directors') as FormControl
  }

  get duration() {
    return this.editMovieForm.get('duration') as FormControl
  }

  get releaseDate() {
    return this.editMovieForm.get('releaseDate') as FormControl
  }

  get genres() {
    return this.editMovieForm.get('genres') as FormControl
  }

  get pegi() {
    return this.editMovieForm.get('pegi') as FormControl
  }

  get portrait() {
    return this.editMovieForm.get('portrait') as FormControl
  }

  get trailer() {
    return this.editMovieForm.get('trailer') as FormControl
  }

}
