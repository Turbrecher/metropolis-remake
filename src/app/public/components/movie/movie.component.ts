import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.sass'
})
export class MovieComponent {
  @Input() title: string = "Metropolis"
  @Input() portrait: string = "images/carteles/cartel_metropolis.jpg"
}
