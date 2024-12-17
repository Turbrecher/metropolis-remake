import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

//list
import { MoviesComponent } from './pages/list/movies/movies.component';
import { ProductsComponent } from './pages/list/products/products.component';
import { SessionsComponent } from './pages/list/sessions/sessions.component';
import { TicketsComponent } from './pages/list/tickets/tickets.component';
import { UsersComponent } from './pages/list/users/users.component';

//create
import { MovieComponent as CreateMovieComponent } from './pages/create/movie/movie.component';
import { ProductComponent as CreateProductComponent } from './pages/create/product/product.component';
import { SessionComponent as CreateSessionComponent } from './pages/create/session/session.component';
import { TicketComponent as CreateTicketComponent } from './pages/create/ticket/ticket.component';
import { UserComponent as CreateUserComponent } from './pages/create/user/user.component';
import { RoomComponent as CreateRoomComponent } from './pages/create/room/room.component';

//edit
import { MovieComponent as EditMovieComponent } from './pages/edit/movie/movie.component';
import { ProductComponent as EditProductComponent } from './pages/edit/product/product.component';
import { SessionComponent as EditSessionComponent } from './pages/edit/session/session.component';
import { TicketComponent as EditTicketComponent } from './pages/edit/ticket/ticket.component';
import { UserComponent as EditUserComponent } from './pages/edit/user/user.component';
import { RoomComponent as EditRoomComponent } from './pages/edit/room/room.component';


import { animation } from '@angular/animations';
import { RoomsComponent } from './pages/list/rooms/rooms.component';

const routes: Routes = [
  {
    path : "admin",
    component: AdminComponent,
    children: [

      //LISTING DATA
      {
        path: "movies",
        component: MoviesComponent
      },

      {
        path: "products",
        component: ProductsComponent
      },

      {
        path: "sessions",
        component: SessionsComponent
      },

      {
        path: "tickets",
        component: TicketsComponent
      },

      {
        path: "users",
        component: UsersComponent
      },

      {
        path: "rooms",
        component: RoomsComponent
      },


      //CREATING DATA

      {
        path: "movies/create",
        component: CreateMovieComponent
      },

      {
        path: "products/create",
        component: CreateProductComponent
      },

      {
        path: "sessions/create",
        component: CreateSessionComponent
      },

      {
        path: "tickets/create",
        component: CreateTicketComponent
      },

      {
        path: "users/create",
        component: CreateUserComponent
      },

      {
        path: "rooms/create",
        component: CreateRoomComponent
      },


      //EDITING DATA

      {
        path: "movies/edit/:id",
        component: EditMovieComponent
      },

      {
        path: "products/edit/:id",
        component: EditProductComponent
      },

      {
        path: "sessions/edit/:id",
        component: EditSessionComponent
      },

      {
        path: "tickets/edit/:id",
        component: EditTicketComponent
      },

      {
        path: "users/edit/:id",
        component: EditUserComponent
      },

      {
        path: "rooms/edit/:id",
        component: EditRoomComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
