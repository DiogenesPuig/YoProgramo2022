export class Profile {
    id?: number;
    nombre: string;
    descripcion: string;
    nacimiento: Date;
    mail: string;
    telefono: string;


    constructor(nombre: string,descripcion: string,nacimiento: Date,mail: string,telefono: string){
        this.nombre = nombre;
        this.descripcion = descripcion
        this.nacimiento = nacimiento
        this.mail = mail
        this. telefono = telefono
    }


}
