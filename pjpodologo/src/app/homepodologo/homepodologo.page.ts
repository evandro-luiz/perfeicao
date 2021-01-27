import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-homepodologo',
  templateUrl: './homepodologo.page.html',
  styleUrls: ['./homepodologo.page.scss'],
})
export class HomepodologoPage implements OnInit {
  lista: Consulta[] = [];
  id: string = "";
  constructor(private consultaServ: ConsultaService,
    private navCtrl: NavController,
    private auth: AngularFireAuth) {

  }

  ngOnInit() {
    this.auth.currentUser.then(response => { // auth.currentUser -> Obten dados do usuario  

      this.id = response.uid;
      console.log(response)

      this.consultaServ.listaDeConsultas(response.uid).subscribe(response => {
        // O servidor respondeu

        this.lista = response;



      }, err => {
        // erro
      })
    })
  }
  visualizar(consulta) {
    this.navCtrl.navigateForward(['/detconsulta', consulta.id]);
  }
}