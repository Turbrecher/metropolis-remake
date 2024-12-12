import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { Url } from '../../shared/Utilities/Url';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  getMovies() {
    return this.http.get<Array<Movie>>(Url.api + 'movies')
  }


  getMovie(id: number) {
    return this.http.get<Movie>(Url.api + 'movies/' + id)
  }

  createMovie(movieData: FormData) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }

    return this.http.post<any>(Url.api + 'movies/', movieData, { headers })
  }


  editMovie(movieData: FormData, id?: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }

    return this.http.post<any>(Url.api + 'movies/' + id, movieData, { headers })
  }

  deleteMovie( id?: number) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get('token') }

    return this.http.delete<any>(Url.api + 'movies/' + id, { headers })
  }
}
