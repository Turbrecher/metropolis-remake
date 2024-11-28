import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilboardComponent } from '../public/pages/bilboard/bilboard.component';
import { PricesComponent } from '../public/pages/prices/prices.component';
import { ContactComponent } from '../public/pages/contact/contact.component';

const routes: Routes = [
  {
    path: "bilboard",
    component: BilboardComponent
  },

  {
    path: "prices",
    component: PricesComponent
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
export class SharedRoutingModule { }
