import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.page.html',
  styleUrls: ['./cadcliente.page.scss'],
})
export class CadclientePage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  fincadcliente(){
    this.navCtrl.navigateForward(['']);
  }
}
