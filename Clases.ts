//clases abstractas
abstract class Maquina {
    constructor(public manufacturador:string){

    }

    resumen():string{
        return `${this.manufacturador} fabrica esta maquina`
    }

    abstract masInfo():string;
}

class Auto extends Maquina{
    constructor(manufacturador:string,public posicion:number,protected velocidad:number){
        super(manufacturador);
    }

    mover(){
        this.posicion+=this.velocidad;
    }
    masInfo(){
        return `Este es un vehiculo localizado a ${this.posicion} y se mueve a ${this.velocidad} KM/H`
    }

}

let miauto= new Auto("toyota",20,70);
miauto.mover();
console.log(miauto.resumen());
console.log(miauto.masInfo());

//clase simple
class Camioneta{
    public posicion : number=0;
    private velocidad: number=43;

    mover(){
        this.posicion+=this.velocidad
        console.log(this.posicion);
    }
}

//herencia basica

class AutoPilotoAutomatico extends Camioneta{
    mover(){
        super.mover();
        super.mover();
    }

}
let tesla =new AutoPilotoAutomatico();
tesla.mover();

//accesores getter y setter
class Moto {
    public posicion: number = 0;
    private _velocidad: number = 43;

    mover() {
        this.posicion += this._velocidad
        console.log(this.posicion);
    }
    
    get velocidad():number{
        return this._velocidad;
    }

    set velocidad(value:number){
        this._velocidad=Math.min(value,this._velocidad);
    }
}

let mimoto=new Moto();
mimoto.velocidad=128;
console.log(mimoto.velocidad);



