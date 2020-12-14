import { Component, OnInit } from '@angular/core';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  lista : Cliente[] = [];
  constructor( private clienteServ : ClienteService) { }

  ngOnInit() {
  }

}
