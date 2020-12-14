import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-homecliente',
  templateUrl: './homecliente.page.html',
  styleUrls: ['./homecliente.page.scss'],
})
export class HomeclientePage implements OnInit {
  @ViewChild("local") local; 

  lista : Cliente[] = [];

  constructor(private navCtrl : NavController,
    private clienteServ : ClienteService) { }

  ngOnInit() {
    this.clienteServ.listaDeClientes().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }
  avancar(cliente){
    this.navCtrl.navigateForward(['/consulta']);
  }
  pesquisar(){
    console.log("Busca por: "+this.local.value)
    this.clienteServ.buscaPorlocal(this.local.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
}
