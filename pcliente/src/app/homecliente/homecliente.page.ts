import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homecliente',
  templateUrl: './homecliente.page.html',
  styleUrls: ['./homecliente.page.scss'],
})
export class HomeclientePage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  avancar(){
    this.navCtrl.navigateForward(['/consulta']);
  }
}
