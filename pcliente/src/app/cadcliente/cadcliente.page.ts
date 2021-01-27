import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.page.html',
  styleUrls: ['./cadcliente.page.scss'],
})
 export class CadclientePage implements OnInit {
   @ViewChild('username') username; //#username
   @ViewChild('password') password;
  constructor(private auth: AngularFireAuth,
    private template: TemplateService,
    private navCtrl: NavController) { }

   ngOnInit() {
   }
  cadastro() {
    this.template.loading.then(load => {
      load.present();

      this.auth.createUserWithEmailAndPassword(this.username.value, this.password.value).then(response => {
         load.dismiss();
         this.template.myAlert("Cadastrado com sucesso, faça seu login");
         this.navCtrl.navigateForward(['/logincliente'])
      }).catch(err => {
         this.template.myAlert("Dados incorretos");
      })
    })
  }
}
