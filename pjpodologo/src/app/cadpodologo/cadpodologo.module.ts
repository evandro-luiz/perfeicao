import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadpodologoPageRoutingModule } from './cadpodologo-routing.module';

import { CadpodologoPage } from './cadpodologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadpodologoPageRoutingModule
  ],
  declarations: [CadpodologoPage]
})
export class CadpodologoPageModule {}
