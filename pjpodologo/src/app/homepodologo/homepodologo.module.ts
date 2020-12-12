import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepodologoPageRoutingModule } from './homepodologo-routing.module';

import { HomepodologoPage } from './homepodologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepodologoPageRoutingModule
  ],
  declarations: [HomepodologoPage]
})
export class HomepodologoPageModule {}
