export class Consulta {
    _id?: number
    nombre: string
    email: string
    whatsapp: number
    ingreso: Date
    salida: Date
    mensaje: string

    constructor(
        nombre: string,
        email: string,
        whatsapp: number,
        ingreso: Date,
        salida: Date,
        mensaje: string
    ){
        this.nombre = nombre
        this.email = email
        this.whatsapp = whatsapp
        this.ingreso = ingreso
        this.salida = salida
        this.mensaje = mensaje
    }
}