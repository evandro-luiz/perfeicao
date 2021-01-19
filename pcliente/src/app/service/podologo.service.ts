import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { Cliente } from '../model/cliente';
import { Podologo } from '../model/podologo';

@Injectable()
export class PodologoService {
    podologo: Podologo = new Podologo();

    constructor(private firestore: AngularFirestore,
        public fireStorage: AngularFireStorage) {

    }

    listaDePodologos(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection('perfil-podologo').snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Podologo[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let podologo: Podologo = new Podologo();
                    podologo.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    podologo.id = obj.payload.doc.id; // inserindo ID
                    this.fireStorage.storage.ref().child(`perfilp/${obj.payload.doc.id}.jpg`).getDownloadURL().then(response => {

                        podologo.imagem = response;
                        lista.push(podologo);
                    }).catch(response => {
                        this.fireStorage.storage.ref().child(`perfilp/perfil.jfif`).getDownloadURL().then(response => {
                            podologo.imagem = response;
                            lista.push(podologo);
                        })
                    })
                    // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }


    buscaPorlocal(cidade: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('perfil-podologo').ref.orderBy("cidade")
                .startAt(cidade).endAt(cidade + "\uf8ff").get().then(response => {
                    let lista: Cliente[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let cliente: Cliente = new Cliente();
                        cliente.setData(obj.data());// obj.payload.doc.data() -> Dados do cliente
                        cliente.id = obj.id; // inserindo ID
                        lista.push(cliente); // adicionando o cliente na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    getPerfil(idUser) {
        return from(new Observable(observe => { // converter para Observable

            this.firestore.collection("perfil-cliente").doc(idUser).get().subscribe(response => { // .doc seleciona o cliente com base no id

                if (response.exists == false) {

                } else {

                }
            })
        }))
    }



    //

    cadastrar(cliente: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('perfil-cliente').add(cliente).then(response => {
                observe.next("Cadastrado com sucesso!");
            }, (err) => {
                observe.error("Erro ao cadastrar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('perfil-cliente').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let cliente: Cliente = new Cliente();
                cliente.id = response.payload.id;
                cliente.setData(response.payload.data());
                observe.next(cliente);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }



    atualizar(cliente: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('perfil-cliente').doc(cliente.id).set(cliente).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    excluir(cliente: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('perfil-cliente').doc(cliente.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }

    // carregar o perfil do cliente (qualquer coleção)
    buscaPerfilPorId(uid: any): Observable<any> { // uid -> authenticator
        return from(new Observable(observe => {
            this.firestore.collection('perfil-podologo').doc(uid).snapshotChanges().subscribe(response => {
                if (response.payload.exists !== false) {

                    let podologo: Podologo = new Podologo();
                    podologo.id = response.payload.id;
                    podologo.setData(response.payload.data());
                    observe.next(podologo);
                }

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    // Atualiza perfil, 
    atualizaPerfil(uid, dados) {
        return from(new Observable(observe => {

            this.firestore.collection('perfil-cliente').doc(uid).set(dados).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

}