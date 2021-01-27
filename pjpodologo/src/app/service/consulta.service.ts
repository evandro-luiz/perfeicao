import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { Consulta } from '../model/consulta';

@Injectable()
export class ConsultaService {
    consulta: Consulta = new Consulta();

    constructor(private firestore: AngularFirestore,
        public fireStorage: AngularFireStorage) {

    }
    cadastrar(consulta: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('consulta').add(consulta).then(response => {
                observe.next("Marcada com sucesso!");
            }, (err) => {
                observe.error("Erro ao marcar!");
            })

        }));
    }


    listaDeConsultas(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("consulta", ref => ref.where("idpodologo", "==", id)).snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Consulta[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let consulta: Consulta = new Consulta();
                    consulta.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    consulta.id = obj.payload.doc.id;
                    this.fireStorage.storage.ref().child(`perfil/${consulta.idcliente}.jpg`).getDownloadURL().then(response => {

                        consulta.imagem = response;
                        lista.push(consulta);
                    }).catch(response => {
                        this.fireStorage.storage.ref().child(`perfilp/perfil.jfif`).getDownloadURL().then(response => {
                            consulta.imagem = response;
                            lista.push(consulta);
                        })
                        // adicionando o cliente na lista // push é adicionar          
                    })
                    console.log(consulta.idpodologo)
                });
                observe.next(lista);
            })

        }))
    }
    
     buscaConsultaPorId(uid: any): Observable<any> { // uid -> authenticator
         return from(new Observable(observe => {
             this.firestore.collection('consulta').doc(uid).snapshotChanges().subscribe(response => {
                 if (response.payload.exists !== false) {
 
                     let consulta: Consulta = new Consulta();
                     consulta.id = response.payload.id;
                     consulta.setData(response.payload.data());
                     observe.next(consulta);
                 }

             }, (err) => {
                 observe.error("Erro ao buscar o ID!");
             })

         }));
     }
}