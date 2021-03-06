import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginclientePageRoutingModule } from './logincliente-routing.module';

import { LoginclientePage } from './logincliente.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginclientePageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [LoginclientePage]
})
export class LoginclientePageModule {}
