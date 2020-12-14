import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeclientePage } from './homecliente.page';

const routes: Routes = [
  {
    path: '',
    component: HomeclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeclientePageRoutingModule {}
