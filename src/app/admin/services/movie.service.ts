import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { Url } from '../../shared/Utilities/Url';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  getMovies() {
    return this.http.get<Array<Movie>>(Url.api + 'movies')
  }


  getMovie(id: number) {
    return this.http.get<Movie>(Url.api + 'movies/' + id)
  }
}
