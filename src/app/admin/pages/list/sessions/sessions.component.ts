import { Component } from '@angular/core';
import { SessionCardComponent } from "../../../components/session-card/session-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [SessionCardComponent, RouterLink],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.sass'
})
export class SessionsComponent {

}
