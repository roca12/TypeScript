class HolaMundo{
    saludo:string
    constructor(mensaje:string){
        this.saludo =mensaje
    }

    saludar(): string{
        return this.saludo
    }

}

let saludador= new HolaMundo("buenas las tengan");
console.log(saludador.saludar())