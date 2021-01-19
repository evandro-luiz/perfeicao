export class Consulta{
    id : string
    data : string;
    hora : string;
    idcliente: string;
    idpodologo: string;
    nomecliente: string;
    nomepodologo: string;
    imagem: string;

    setData(objFirebase : any){
        this.id = objFirebase.id;
        this.data = objFirebase.data;
        this.hora = objFirebase.hora;
        this.idcliente = objFirebase.idcliente;
        this.idpodologo = objFirebase.idpodologo;
        this.nomecliente = objFirebase.nomecliente;
        this.nomepodologo = objFirebase.nomepodologo;
    }
}