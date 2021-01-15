import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { PodologoService } from '../service/podologo.service';


@Component({
  selector: 'app-homecliente',
  templateUrl: './homecliente.page.html',
  styleUrls: ['./homecliente.page.scss'],
})
export class HomeclientePage implements OnInit {
  @ViewChild("local") local; 

  lista : Cliente[] = [];

  constructor(private navCtrl : NavController,
    private podologoServ : PodologoService) { }

  ngOnInit() {
    this.podologoServ.listaDePodologos().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }
  avancar(cliente){
    this.navCtrl.navigateForward(['/consulta',cliente.id]);
  }
  pesquisar(){
    console.log("Busca por: "+this.local.value)
    this.podologoServ.buscaPorlocal(this.local.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
}
