import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VconsultaPageRoutingModule } from './vconsulta-routing.module';

import { VconsultaPage } from './vconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VconsultaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VconsultaPage]
})
export class VconsultaPageModule {}
