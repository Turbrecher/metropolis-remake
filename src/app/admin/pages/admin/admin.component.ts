import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Scroll } from '../../../shared/Utilities/Scroll';
import { fadeInScaleAnimationAdmin } from '../../../shared/animations/fade-in-scale-admin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.sass'
})
export class AdminComponent {

  ngOnInit(){
    Scroll.scrollUp()
  }

  constructor(private route:ActivatedRoute){
  }

}
