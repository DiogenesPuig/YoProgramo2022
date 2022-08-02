export class Studies {
    id?: number;
    nombre: string;
    descripcion: string;
    inicio: Date;
    fin: Date;


    constructor(nombre: string,descripcion: string,inicio: Date,fin:Date){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.fin = fin;
    }
}
