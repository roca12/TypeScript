//Strings y literales
let mascota:"tiburon"
//al ser tipo tiburon no puede cambiar de tipo por lo que la siguiente linea da error
//mascota="perro"

//definiendo un tipo  y usandolo en una funcion
type Especies="Mako"|"Blanco"|"Toro"
function comprarTiburon(mascota:Especies,nombre:string){

}

//tuplas
let dia :[number,string]
dia=[23,"sabado"]
console.log(dia)

//booleanos
let booleano :boolean=true
let booleano2: boolean 
console.log(booleano)
console.log(booleano2)

//tipos de insersion
interface Cuchillo{
    cortar();
}

interface Sacacorchos{
    abrirBotella();
}

interface Tijeritas{
    abrirPaquete();
}

type NavajaSuiza=Cuchillo&Sacacorchos&Tijeritas;

function usar(herramienta:NavajaSuiza){
    console.log("puedo hacer de todo");
    //herramienta.abrirBotella();
    //herramienta.abrirPaquete();
    //herramienta.cortar();
}
let minavaja:NavajaSuiza
usar(minavaja)

// enumeradores
const enum ActividadNinja{
    Espionaje,
    Sabojate,
    Eliminacion
}
console.log(ActividadNinja["Sabojate"]);

//arrays
let numeros:number[]=[1,2,3];
let arraygenericostring:Array<string>=['primero','segundo','tercero']

