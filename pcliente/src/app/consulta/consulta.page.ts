import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Cliente } from '../model/cliente';
import { Podologo } from '../model/podologo';
import { ClienteService } from '../service/cliente.service';
import { ConsultaService } from '../service/consulta.service';
import { PodologoService } from '../service/podologo.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
 podologo : Podologo = new Podologo();
 cliente : Cliente = new Cliente();
 formGroup: FormGroup;
 
  constructor(private formBuilder : FormBuilder, 
    private podologoServ : PodologoService,
    private consultaServ : ConsultaService,
              private route: ActivatedRoute,  
              private template : TemplateService,
              private navCtrl : NavController,
              private clienteServ : ClienteService,
              private auth : AngularFireAuth) { 
                this.iniciarForm();
               
              }
              
  ngOnInit() {
    this.route.paramMap.subscribe(url=>{
    let id = url.get('id');
    this.podologoServ.buscaPerfilPorId(id).subscribe(Response=>{
      this.podologo=Response;
      
      this.iniciarForm();
    })
    })
    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      this.clienteServ.buscaPerfilPorId(id).subscribe(Response=>{
        this.cliente=Response;
        
        this.iniciarForm();
      })
      })
      
  }
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      data: [],
      hora: [],
      idcliente: [this.cliente.id],
      idpodologo: [this.podologo.id],
      nomecliente: [this.cliente.nome],
      nomepodologo: [this.podologo.nome]
      
      
      
    })
  }
 cadastrar(){
   console.log(this.formGroup.value)
    this.consultaServ.cadastrar(this.formGroup.value).subscribe(Response=>{
      console.log(Response)
      this.template.myAlert("Consulta Marcada com Sucesso");
        this.navCtrl.navigateRoot(['homecliente']);
    })
 }
}
