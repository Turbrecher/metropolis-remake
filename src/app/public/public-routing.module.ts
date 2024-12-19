import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilboardComponent } from './pages/bilboard/bilboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { MovieViewComponent } from './pages/movie-view/movie-view.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SeatSelectorComponent } from './pages/seat-selector/seat-selector.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {
    path: "bilboard",
    component: BilboardComponent
  },

  {
    path: "bilboard/movie/:id",
    component: MovieViewComponent
  },

  {
    path: "bilboard/movie/:movie_id/moviesession/:movie_session_id",
    component: SeatSelectorComponent
  },
  {
    path: "bilboard/moviesession/:movie_session_id/payment/:seat_id",
    component: PaymentComponent
  },

  {
    path: "products",
    component: ProductsComponent
  },

  {
    path: "contact",
    component: ContactComponent
  },

  {
    path: "profile",
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
