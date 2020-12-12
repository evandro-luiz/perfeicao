import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.page.html',
  styleUrls: ['./logincliente.page.scss'],
})
export class LoginclientePage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  cadcliente(){
    this.navCtrl.navigateForward(['/cadcliente']);
  }
  esqsenha(){
    this.navCtrl.navigateForward(['/esqsenha']);
  }
  login(){
    this.navCtrl.navigateForward(['/homecliente']);
  }
}
