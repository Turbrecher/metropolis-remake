import { Component } from '@angular/core';
import { UserCardComponent } from "../../../components/user-card/user-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent {

}
