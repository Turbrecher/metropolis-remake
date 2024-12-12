import { Component, Input } from '@angular/core';
import { Url } from '../../../shared/Utilities/Url';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.sass'
})
export class MovieCardComponent {

  @Input() portrait!: string
  @Input() title!: string
  portraitApi: string = Url.portraitApi
}
