import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieSessionService } from '../../../services/movie-session.service';
import { SeatService } from '../../../services/seat.service';
import { TicketService } from '../../../services/ticket.service';
import { UserService } from '../../../services/user.service';
import { SelectOption } from '../../../../shared/models/select-option';
import { SelectComponent } from '../../../../shared/components/formComponents/select/select.component';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule, SelectComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.sass'
})
export class TicketComponent {

  userOptions: Array<SelectOption> = []
  sessionOptions: Array<SelectOption> = []
  seatOptions: Array<SelectOption> = []
  roomId?: number

  createTicketForm: FormGroup = this.fb.group({
    "session": ["", [Validators.required]],
    "seat": ["", [Validators.required]],
    "user": ["", [Validators.required]],
    "date": ["", [Validators.required]],
  })



  constructor(private fb: FormBuilder, private movieSessionService: MovieSessionService, private userService: UserService, private ticketService: TicketService, private activatedRoute: ActivatedRoute, private router: Router, private seatService: SeatService) {

  }

  ngOnInit() {

    let roomId: number | undefined

    //load sessions.
    this.movieSessionService.getAllMovieSessions().subscribe({
      next: (movieSessions) => {
        movieSessions.forEach((movieSession) => {
          this.sessionOptions.push({
            "name": (movieSession.time!) + " // " + (movieSession.movie?.title!),
            "id": movieSession.id
          })
        })

      },
      error: (err) => {

      }
    })




    //load users.
    this.userService.getUsers().subscribe({
      next: (users) => {
        users.forEach((user) => {
          this.userOptions.push({
            "name": user.name! + " // " + user.email,
            "id": user.id
          })
        })
      },
      error: (err) => {

      }
    })





  }

  loadSeats(event: Event, movieSessionId?: number) {
    this.movieSessionService.getMovieSession(movieSessionId).subscribe({
      next: (movieSession) => {
        //load seats.
        this.seatService.getRoomSeats(movieSession.room?.id).subscribe({
          next: (seats) => {
            seats.forEach((seat) => {
              this.seatOptions.push({
                "id": seat.id,
                "name": "Fila " + seat.row + " Sillón " + seat.col
              })
            })
          },
          error: (err) => {

          }
        })
      },
      error: (err) => {

      }
    })


  }




  deleteTicket(event: Event) {
    event.preventDefault()

    if (!confirm('¿Estás seguro/a de querer eliminar esta entrada?')) {
      return
    }

    this.ticketService.deleteTicket(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        this.router.navigate(['/admin/tickets'])
      },
      error: (err) => {

      }
    })
  }


  createTicket(event: Event) {
    event.preventDefault()

    let ticketData = new FormData()

    ticketData.append('movie_session_id', this.session.value)
    ticketData.append('seat_id', this.seat.value)
    ticketData.append('user_id', this.user.value)
    ticketData.append('date', this.date.value)
    ticketData.append('_method', 'POST')


    this.ticketService.createTicket(ticketData).subscribe({
      next: (response) => {

        this.router.navigate(['/admin/tickets'])

      },
      error: (err) => {

      }
    })
  }



  get session() {
    return this.createTicketForm.get('session') as FormControl
  }

  get seat() {
    return this.createTicketForm.get('seat') as FormControl
  }

  get user() {
    return this.createTicketForm.get('user') as FormControl
  }

  get date() {
    return this.createTicketForm.get('date') as FormControl
  }

}
