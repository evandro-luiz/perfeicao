import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepodologoPage } from './homepodologo.page';

const routes: Routes = [
  {
    path: '',
    component: HomepodologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepodologoPageRoutingModule {}
