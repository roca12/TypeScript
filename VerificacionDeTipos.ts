//verificando tipo usando guardias
function isString(test:any):test is string{
    return typeof test ==="string";
}

function ejemplo(foo:any){
    if (isString(foo)){
        console.log("Es un string: "+foo)
    }else{
        console.log("No se lo que sea esto "+foo);
    }
}

ejemplo("hola mundo");
ejemplo({algo:"mas"});

// es istancia de 

class Mascota{}
class Perro extends Mascota{
    ladrar(){
        console.log("woof");
    }
}

class Gato extends Mascota{
    purr(){
        console.log("meow");
    }
}

function ejemplo2(foo:any){
    if(foo instanceof Perro){
        foo.ladrar();
    }
    if(foo instanceof Gato){
        foo.purr();
    }
}

ejemplo2(new Perro());
ejemplo2(new Gato());

// tipo de 
function ejemplo3(foo:any){
    if (typeof foo ==="number"){
        console.log(foo+100);
    }
    if (typeof foo ==="string"){
        console.log("es un string");
    }
}
ejemplo3(34)
ejemplo3("hola")