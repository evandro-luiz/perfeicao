import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilpodologoPageRoutingModule } from './perfilpodologo-routing.module';

import { PerfilpodologoPage } from './perfilpodologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilpodologoPageRoutingModule
  ],
  declarations: [PerfilpodologoPage]
})
export class PerfilpodologoPageModule {}
