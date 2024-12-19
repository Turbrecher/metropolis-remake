import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/components/formComponents/input/input.component";
import { ButtonComponent } from "../../../shared/components/formComponents/button/button.component";
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketService } from '../../../admin/services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.sass'
})
export class PaymentComponent {


  constructor(private fb: FormBuilder, private ticketService: TicketService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.movieSessionId = this.activatedRoute.snapshot.params['movie_session_id']
    this.seatId = this.activatedRoute.snapshot.params['seat_id']
  }

  private movieSessionId?: string
  private seatId?: string

  public paymentForm = this.fb.group({
    'cardNumber': ["", []],
    'expirationDate': ["", []],
    'name': ["", []],
    'cvv': ["", []],
  })


  pay(event: Event) {
    let ticketData: FormData = new FormData()

    let date = new Date()
    let dateString = date.getFullYear + "/" + date.getMonth + "/" + date.getDate()

    ticketData.append('movie_session_id', this.movieSessionId!)
    ticketData.append('seat_id', this.seatId!)
    ticketData.append('date', new Date().getDate().toString())
    ticketData.append('_method', "POST")



    this.ticketService.createTicket(ticketData).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }



  get name() {
    return this.paymentForm.get('name') as FormControl
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber') as FormControl
  }

  get expirationDate() {
    return this.paymentForm.get('expirationDate') as FormControl
  }

  get cvv() {
    return this.paymentForm.get('cvv') as FormControl
  }

}
