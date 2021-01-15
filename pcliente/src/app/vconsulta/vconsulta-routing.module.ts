import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VconsultaPage } from './vconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: VconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VconsultaPageRoutingModule {}
