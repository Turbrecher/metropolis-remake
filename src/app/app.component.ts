import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { fadeInScaleAnimation } from './shared/animations/fade-in-scale';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    fadeInScaleAnimation
  ]
})
export class AppComponent {
  title = 'metropolis-remake';

  constructor(private route:ActivatedRoute){
  }


  getRouteAnimationData() {
    return this.route?.snapshot?.data;
  }
  
}
