import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqsenhaPageRoutingModule } from './esqsenha-routing.module';

import { EsqsenhaPage } from './esqsenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqsenhaPageRoutingModule
  ],
  declarations: [EsqsenhaPage]
})
export class EsqsenhaPageModule {}
