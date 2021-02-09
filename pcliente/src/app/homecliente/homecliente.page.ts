import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { Podologo } from '../model/podologo';
import { ClienteService } from '../service/cliente.service';
import { PodologoService } from '../service/podologo.service';


@Component({
  selector: 'app-homecliente',
  templateUrl: './homecliente.page.html',
  styleUrls: ['./homecliente.page.scss'],
})
export class HomeclientePage implements OnInit {
  @ViewChild("local") local;
  imagem: any;
  lista: Podologo[] = [];
  podologo: Podologo = new Podologo();
  idp: string = "";

  constructor(private navCtrl: NavController,
    private podologoServ: PodologoService,
    public fireStorage: AngularFireStorage) { }

  ngOnInit() {
    this.podologoServ.listaDePodologos().subscribe(response => {
      // O servidor respondeu

      this.lista = response;

      console.log(response);
      this.idp = response;
      console.log(this.idp);
    }, err => {
      // erro
    })

    this.downloadImage();
    
  }
  avancar(podologo) {
    this.navCtrl.navigateForward(['/consulta', podologo.id]);
  }
  pesquisar() {
    console.log("Busca por: " + this.local.value)
    this.podologoServ.buscaPorlocal(this.local.value).subscribe(response => {
      this.lista = [];
      this.lista = response;
      console.log(response);
      
    });
    
  }
  downloadImage() {

    this.fireStorage.storage.ref().child(`perfilp/${this.idp}.jpg`)

      .getDownloadURL().then(response => {

        this.imagem = response;

      })

  }

}
