import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.sass'
})
export class MovieComponent {


  constructor(private fb:FormBuilder){

  }

  editMovieForm: FormGroup = this.fb.group({
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
    return this.editMovieForm.get('title') as FormControl
  }

  get synopsis(){
    return this.editMovieForm.get('synopsis') as FormControl
  }

  get actors(){
    return this.editMovieForm.get('actors') as FormControl
  }

  get directors(){
    return this.editMovieForm.get('directors') as FormControl
  }

  get duration(){
    return this.editMovieForm.get('duration') as FormControl
  }

  get releaseDate(){
    return this.editMovieForm.get('releaseDate') as FormControl
  }

  get genres(){
    return this.editMovieForm.get('genres') as FormControl
  }

  get pegi(){
    return this.editMovieForm.get('pegi') as FormControl
  }

  get portrait(){
    return this.editMovieForm.get('portrait') as FormControl
  }

}
