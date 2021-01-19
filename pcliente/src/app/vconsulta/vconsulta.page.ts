import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { Consulta } from '../model/consulta';
import { Podologo } from '../model/podologo';
import { ClienteService } from '../service/cliente.service';
import { ConsultaService } from '../service/consulta.service';
import { PodologoService } from '../service/podologo.service';

@Component({
  selector: 'app-vconsulta',
  templateUrl: './vconsulta.page.html',
  styleUrls: ['./vconsulta.page.scss'],
})
export class VconsultaPage implements OnInit {
  lista : Consulta[] = [];
  id : string = "";
  imagem: any;
  iduser: any = "";
  podologo: Podologo = new Podologo();
  cliente: Cliente = new Cliente();
  consulta: Consulta = new Consulta();
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private consultaServ : ConsultaService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    private fireStorage : AngularFireStorage,
    private podologoServ: PodologoService,
    private clienteServ: ClienteService,) { 
      this.iniciarForm();
    }

  ngOnInit() {
    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      this.consultaServ.buscaConsultaPorId(id).subscribe(Response=>{
        this.consulta=Response;
        
        this.iniciarForm();
        this.podologoServ.buscaPerfilPorId(this.consulta.idpodologo).subscribe(Response=>{
          this.podologo=Response;
        
          this.iniciarForm();
        })
        this.clienteServ.buscaPerfilPorId(this.consulta.idcliente).subscribe(Response=>{
          this.cliente=Response;
          
          this.iniciarForm();
        })
      })
      })
    this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  

      this.id = response.uid;

     
    this.consultaServ.listaDeConsultas(response.uid).subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     
      
      
    },err=>{
      // erro
    })
  })
  }
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      data: [this.consulta.data],
      hora: [this.consulta.hora],
      idcliente: [this.cliente.id],
      idpodologo: [this.podologo.id],
      nomecliente: [this.cliente.nome],
      nomepodologo: [this.podologo.nome]




    })
  }
 
  visualizar(consulta){
    this.navCtrl.navigateForward(['/detconsulta',consulta.id]);
  }
  enviarArquivo(event) {
    //capturando imagem
    this.imagem = event.srcElement.files[0];
    //enviar para storage
    this.uploadStorage();
  }
  
  uploadStorage(){
  //envia ao firebase(storage)
  this.fireStorage.storage.ref().child(`perfil/${this.consulta.idcliente}.jpg`).put(this.imagem).then(response=>{
  console.log("foto foi blz");
  this.downloadImage();
  });
  }
  downloadImage(){
  
  this.fireStorage.storage.ref().child(`perfilp/${this.podologo.id}.jpg`)
  
    .getDownloadURL().then(response=>{
  
      this.imagem = response;
  
    })
  
  }
  
  }


