import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-loginpodologo',
  templateUrl: './loginpodologo.page.html',
  styleUrls: ['./loginpodologo.page.scss'],
})
export class LoginpodologoPage implements OnInit {
  formGroup : FormGroup; 
  constructor( private formBuilder : FormBuilder,
    private auth : AngularFireAuth,
    private navCtrl : NavController,
    private menuCtrl : MenuController,
    private template : TemplateService
    ) { this.iniciarForm(); }

<<<<<<< HEAD
  constructor( private navCtrl : NavController) { }
=======
>>>>>>> upstream/master

  ngOnInit() {
  }
  cadpodologo(){
<<<<<<< HEAD
    this.navCtrl.navigateForward(['/cadastropodologo']);
}
esqsenha(){
  this.navCtrl.navigateForward(['/esq-senha']);
}
login(){
  this.navCtrl.navigateForward(['/homepodologo']);
}
=======
    this.navCtrl.navigateForward(['/cadpodologo']);
}
esqsenha(){
  this.navCtrl.navigateForward(['/esqsenha']);
}

  login() {

    let user = this.formGroup.controls['username'].value;
    let pass = this.formGroup.controls['password'].value;

    this.template.loading.then(load=>{ // mensagem carregando

      this.auth.signInWithEmailAndPassword(user,pass).then(data=>{ // envia firebase
        // sucesso
        load.dismiss(); // encerrando mensagem
        this.menuCtrl.enable(true); // ativando menu
        this.navCtrl.navigateRoot(['homepodologo']); // redirecionar
      }).catch(data=>{
        //erro
        load.dismiss(); // encerrando mensagem
        this.template.myAlert("Erro ao atenticar");
      })

    })

  }
  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      username : ['',[Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]]
    })
  }
>>>>>>> upstream/master
}
