import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginModalComponent } from "../../../public/components/login-modal/login-modal.component";
import { RegisterModalComponent } from "../../../public/components/register-modal/register-modal.component";
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../public/services/auth.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginModalComponent, RegisterModalComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {

  @ViewChild(LoginModalComponent) loginDialog!: LoginModalComponent
  @ViewChild(RegisterModalComponent) registerDialog!: RegisterModalComponent
  isAuthenticated = false
  isAdmin = false

  constructor(private cookieService: CookieService, private authService: AuthService, private router: Router) {

  }

  //Function that deletes auth token and returns an observable.
  deleteToken(token: string) {
    this.cookieService.set('token', "", -1000);

    return of(token);
  }


  openLoginModal() {
    this.loginDialog.openDialog()
  }

  openRegisterModal() {
    this.registerDialog.openDialog()
  }

  ngOnInit() {
    //Check authentication.
    if (this.cookieService.get("token")) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }


    if (!this.isAuthenticated) {
      return
    }

    //Check roles
    this.authService.getRole(this.cookieService.get("token")).subscribe(
      {
        next: (response) => {
          if (response.role == "admin") {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }

        },
        error: (err) => {
          console.log(err)
          this.deleteToken("a").subscribe(() => {
            location.reload()
          })

        }
      }
    )



  }


  //Function that log outs the current user
  logout() {

    this.authService.logout().subscribe({

      next: async (response) => {
        this.deleteToken('default').subscribe({
          next: () => {
            this.isAuthenticated = false
            this.isAdmin = false
            this.ngOnInit()
            this.router.navigate(['/bilboard'])
          }
        })


      },

      error: (err) => {
        alert(err.message)
      },

    })
  }

}
