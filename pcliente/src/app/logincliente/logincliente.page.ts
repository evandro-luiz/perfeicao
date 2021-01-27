import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { TemplateService } from '../service/template.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.page.html',
  styleUrls: ['./logincliente.page.scss'],
})
export class LoginclientePage implements OnInit {

   formGroup : FormGroup; 
   constructor( private formBuilder : FormBuilder,
     private auth : AngularFireAuth,
     private navCtrl : NavController,
     private menuCtrl : MenuController,
     private template : TemplateService
     ) { this.iniciarForm(); }

   ngOnInit() {
     this.menuCtrl.enable(false);
   }
   cadcliente(){
     this.navCtrl.navigateForward(['/cadcliente']);
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
         this.navCtrl.navigateRoot(['homecliente']); // redirecionar
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
}