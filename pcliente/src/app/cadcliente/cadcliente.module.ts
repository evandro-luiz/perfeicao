import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadclientePageRoutingModule } from './cadcliente-routing.module';

import { CadclientePage } from './cadcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadclientePageRoutingModule
  ],
  declarations: [CadclientePage]
})
export class CadclientePageModule {}
