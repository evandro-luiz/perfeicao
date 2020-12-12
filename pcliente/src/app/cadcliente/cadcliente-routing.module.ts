import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadclientePage } from './cadcliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadclientePageRoutingModule {}
