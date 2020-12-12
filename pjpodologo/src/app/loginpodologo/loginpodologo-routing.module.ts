import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpodologoPage } from './loginpodologo.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpodologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpodologoPageRoutingModule {}
