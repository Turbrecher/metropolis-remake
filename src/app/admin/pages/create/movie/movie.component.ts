import { Component } from '@angular/core';
import { fadeInScaleAnimationAdmin } from '../../../../shared/animations/fade-in-scale-admin';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  
  constructor(private fb:FormBuilder){

  }

  createMovieForm: FormGroup = this.fb.group({
    "title" : ["",[Validators.required]],
    "synopsis" : ["",[Validators.required]],
    "actors" : ["",[Validators.required]],
    "directors" : ["",[Validators.required]],
    "duration" : ["",[Validators.required]],
    "releaseDate" : ["",[Validators.required]],
    "genres" : ["",[Validators.required]],
    "pegi" : ["",[Validators.required]],
    "portrait" : ["",[Validators.required]],
  })



  get title(){
    return this.createMovieForm.get('title') as FormControl
  }

  get synopsis(){
    return this.createMovieForm.get('synopsis') as FormControl
  }

  get actors(){
    return this.createMovieForm.get('actors') as FormControl
  }

  get directors(){
    return this.createMovieForm.get('directors') as FormControl
  }

  get duration(){
    return this.createMovieForm.get('duration') as FormControl
  }

  get releaseDate(){
    return this.createMovieForm.get('releaseDate') as FormControl
  }

  get genres(){
    return this.createMovieForm.get('genres') as FormControl
  }

  get pegi(){
    return this.createMovieForm.get('pegi') as FormControl
  }

  get portrait(){
    return this.createMovieForm.get('portrait') as FormControl
  }
}
