import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilpodologoPage } from './perfilpodologo.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilpodologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilpodologoPageRoutingModule {}
