export class Podologo{
    id : string;
    nome : string;
    numero: string;
    cpf: string;
    cep: string;
    estado: string;
    cidade: string;
    endereco: string;
    complemento: string;
    nivelescola: string;


    setData(objFirebase : any){
        this.id = objFirebase.id;
        this.nome = objFirebase.nome;
        this.numero = objFirebase.numero;
        this.cpf = objFirebase.cpf;
        this.cep = objFirebase.cep;
        this.estado = objFirebase.estado;
        this.cidade = objFirebase.cidade;
        this.endereco = objFirebase.endereco;
        this.complemento = objFirebase.complemento;
        this.nivelescola = objFirebase.nivelescola
    
        
    }

}