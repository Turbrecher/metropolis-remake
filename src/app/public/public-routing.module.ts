import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilboardComponent } from './pages/bilboard/bilboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { MovieViewComponent } from './pages/movie-view/movie-view.component';

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
    path: "products",
    component: ProductsComponent
  },

  {
    path: "contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
