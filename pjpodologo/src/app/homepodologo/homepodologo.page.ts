import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepodologo',
  templateUrl: './homepodologo.page.html',
  styleUrls: ['./homepodologo.page.scss'],
})
export class HomepodologoPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  visualizar(){
    this.navCtrl.navigateForward(['/consulta']);
}
}
