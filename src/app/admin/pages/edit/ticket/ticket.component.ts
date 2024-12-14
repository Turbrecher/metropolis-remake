import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from "../../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../../shared/components/formComponents/button/button.component";
import { SelectComponent } from '../../../../shared/components/formComponents/select/select.component';
import { SelectOption } from '../../../../shared/models/select-option';
import { MovieSessionService } from '../../../services/movie-session.service';
import { UserService } from '../../../services/user.service';
import { TicketService } from '../../../services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SeatService } from '../../../services/seat.service';

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


  editTicketForm: FormGroup = this.fb.group({
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






    //load ticket data
    this.ticketService.getTicket(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (ticket) => {
        console.log(ticket)
        this.session.setValue(ticket.movie_session?.id)
        this.seat.setValue(ticket.movie_session?.id)
        this.user.setValue(ticket.user?.id)
        this.date.setValue(ticket.date)


        //load seats.
        this.seatService.getRoomSeats(ticket.movie_session?.room?.id).subscribe({
          next: (seats) => {
            seats.forEach((seat) => {
              this.seatOptions.push({
                "id": seat.id,
                "name": "Fila " + seat.row + " Sillón " + seat.col
              })
            })

            //Load current ticket's seat data
            this.seat.setValue(ticket.seat?.id)
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
        console.log(response)
        this.router.navigate(['/admin/tickets'])
      },
      error: (err) => {

      }
    })
  }


  editTicket(event: Event) {
    event.preventDefault()

    let ticketData = new FormData()

    ticketData.append('movie_session_id', this.session.value)
    ticketData.append('seat_id', this.seat.value)
    ticketData.append('user_id', this.user.value)
    ticketData.append('date', this.date.value)
    ticketData.append('_method', 'PUT')


    this.ticketService.editTicket(ticketData, this.activatedRoute.snapshot.params['id']).subscribe({
      next: (response) => {
        console.log(response)

        this.router.navigate(['/admin/tickets'])

      },
      error: (err) => {

      }
    })
  }



  get session() {
    return this.editTicketForm.get('session') as FormControl
  }

  get seat() {
    return this.editTicketForm.get('seat') as FormControl
  }

  get user() {
    return this.editTicketForm.get('user') as FormControl
  }

  get date() {
    return this.editTicketForm.get('date') as FormControl
  }

}
