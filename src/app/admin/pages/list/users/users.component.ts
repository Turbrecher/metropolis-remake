import { Component } from '@angular/core';
import { UserCardComponent } from "../../../components/user-card/user-card.component";
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent {


  users !: Array<User>


  constructor(private userService: UserService) {

  }


  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users
      },
      error: (err) => {

      }
    })
  }
}
