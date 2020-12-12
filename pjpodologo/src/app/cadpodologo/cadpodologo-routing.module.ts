import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadpodologoPage } from './cadpodologo.page';

const routes: Routes = [
  {
    path: '',
    component: CadpodologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadpodologoPageRoutingModule {}
