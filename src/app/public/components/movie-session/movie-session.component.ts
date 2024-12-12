import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-session',
  standalone: true,
  imports: [],
  templateUrl: './movie-session.component.html',
  styleUrl: './movie-session.component.sass'
})
export class MovieSessionComponent {

  @Input() hour!: String
  @Input() room!: String

}
