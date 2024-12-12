import { Component, Input } from '@angular/core';
import { Url } from '../../../shared/Utilities/Url';

@Component({
  selector: 'app-session-card',
  standalone: true,
  imports: [],
  templateUrl: './session-card.component.html',
  styleUrl: './session-card.component.sass'
})
export class SessionCardComponent {

  @Input() time !: string
  @Input() portrait !: string
  @Input() room !: string
  portraitApi: string = Url.portraitApi
}
