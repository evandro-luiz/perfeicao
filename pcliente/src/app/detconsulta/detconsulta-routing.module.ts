import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetconsultaPage } from './detconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: DetconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetconsultaPageRoutingModule {}
