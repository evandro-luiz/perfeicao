import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.page.html',
  styleUrls: ['./perfilcliente.page.scss'],
})
export class PerfilclientePage implements OnInit {
  imagem: any;
  formGroup: FormGroup;
  perfil: Cliente = new Cliente(); // Declarar a classe onde se encontra dados do perfil
  iduser: any = "";
   constructor(private formBuilder: FormBuilder,
     private clienteServ: ClienteService,
     private navCtrl: NavController,
     private template: TemplateService,
     private auth: AngularFireAuth,
     public fireStorage: AngularFireStorage) { // AngularFireAuth -> pegar dados do usuario logado
 
     this.iniciarForm(); // obrigatório inicializar o formulário

     this.auth.currentUser.then(response => { // auth.currentUser -> Obten dados do usuario
       this.iduser = response.uid;
       //donwload imagem
       this.downloadImage();
       this.clienteServ.buscaPerfilPorId(response.uid).subscribe(response => {
         // se houver o perfil, colocar os dados para a variavel perfil
         this.perfil = response; // dados preenchidos
         this.iniciarForm(); // atualizar os dados do formulário
 
       }

      )
    })

  }

   ngOnInit() {
   }
   iniciarForm() {
     this.formGroup = this.formBuilder.group({
       nome: [this.perfil.nome],
       numero: [this.perfil.numero],
       cpf: [this.perfil.cpf],
       cep: [this.perfil.cep],
       estado: [this.perfil.estado],
       cidade: [this.perfil.cidade],
       endereco: [this.perfil.endereco],
       complemento: [this.perfil.complemento]


     })
   }

  atualizar() {

    this.auth.currentUser.then(response => { // auth.currentUser -> Obten dados do usuario
      // envio uid -> idUsuário
      // this.formGroup.value -> Dados preenchidos nos campos
      this.clienteServ.atualizaPerfil(response.uid, this.formGroup.value).subscribe(response => {
        console.log(response);
        console.log(this.formGroup.value)
        this.template.myAlert("Finalizado com sucesso");
        this.navCtrl.navigateRoot(['homecliente']);

      })
    })
  }

  enviarArquivo(event) {
    //capturando imagem
    this.imagem = event.srcElement.files[0];
    //enviar para storage
    this.uploadStorage();
  }

  uploadStorage() {
    //envia ao firebase(storage)
    this.fireStorage.storage.ref().child(`perfil/${this.iduser}.jpg`).put(this.imagem).then(response => {
      console.log("foto foi blz");
      this.downloadImage();
    });
  }
  downloadImage() {

    this.fireStorage.storage.ref().child(`perfil/${this.iduser}.jpg`)

      .getDownloadURL().then(response => {

        this.imagem = response;

      }).catch(response => {
        this.fireStorage.storage.ref().child(`perfilp/perfil.jfif`).getDownloadURL().then(response => {
          this.imagem = response;

        })
      })
  }


}

