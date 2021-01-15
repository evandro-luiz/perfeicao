import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VconsultaPageRoutingModule } from './vconsulta-routing.module';

import { VconsultaPage } from './vconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VconsultaPageRoutingModule
  ],
  declarations: [VconsultaPage]
})
export class VconsultaPageModule {}
