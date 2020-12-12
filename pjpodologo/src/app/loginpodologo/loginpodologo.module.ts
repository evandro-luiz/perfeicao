import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpodologoPageRoutingModule } from './loginpodologo-routing.module';

import { LoginpodologoPage } from './loginpodologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpodologoPageRoutingModule
  ],
  declarations: [LoginpodologoPage]
})
export class LoginpodologoPageModule {}
