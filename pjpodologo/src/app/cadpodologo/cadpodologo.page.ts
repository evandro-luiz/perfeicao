import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadpodologo',
  templateUrl: './cadpodologo.page.html',
  styleUrls: ['./cadpodologo.page.scss'],
})
export class CadpodologoPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  cad(){
    this.navCtrl.navigateForward(['/fincadpodologo']);
}

}