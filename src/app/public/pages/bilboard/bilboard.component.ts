import { Component } from '@angular/core';
import { MovieComponent } from "../../components/movie/movie.component";
import { RouterLink } from '@angular/router';
import { Scroll } from '../../../shared/Utilities/Scroll';

@Component({
  selector: 'app-bilboard',
  standalone: true,
  imports: [MovieComponent, RouterLink],
  templateUrl: './bilboard.component.html',
  styleUrl: './bilboard.component.sass'
})
export class BilboardComponent {

  ngOnInit(){
    Scroll.scrollUp()
  }
}
