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
    this.navCtrl.navigateForward(['/cadastrocliente']);
  }
  esqsenha(){
    this.navCtrl.navigateForward(['/esq-senha']);
  }
  login(){
    this.navCtrl.navigateForward(['/homecliente']);
  }
}
