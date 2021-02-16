//agregar metadata con decorador

function addMetadata(target:any){
    target.__customMetadata={
        somekey:"some value"
    }
    return target;
}

//@addMetadata
//FUNCION EXPERIMENTAL AUN
class Persona{
    private _nombre:string;
    public constructor(name:string){
        this._nombre=name;
    }

    public saludar(){
        return this._nombre;
    }
}

function getMetadataFromClass(target:any){
    return target.__customMetadata;
}

console.log(getMetadataFromClass(Persona));