import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpodologo',
  templateUrl: './loginpodologo.page.html',
  styleUrls: ['./loginpodologo.page.scss'],
})
export class LoginpodologoPage implements OnInit {

  constructor( private navCtrl : NavController) { }

  ngOnInit() {
  }
  cadpodologo(){
    this.navCtrl.navigateForward(['/cadastropodologo']);
}
esqsenha(){
  this.navCtrl.navigateForward(['/esq-senha']);
}
login(){
  this.navCtrl.navigateForward(['/homepodologo']);
}
}
