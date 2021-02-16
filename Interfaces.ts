//Extendiendo interfaces
interface IPerson{
    name:String
    age:number

    breath():void
}

interface IManager extends IPerson{
    managerid:number;
    managePeople(people:IPerson[]):void
}

//clase extendiendo interface 
interface ISampleClassInterface{
    samplevariable:string
    sampleMethod():void
    optionalvariable?:string
}

class SampleClass implements ISampleClassInterface{
    //heredado
    samplevariable: string;
    sampleMethod(): void {
        throw new Error("Method not implemented.");
    }
    optionalvariable?: string;
    
}

//interfaces para polimorfismo
interface Connector{
    doConnect():boolean;
}

export class WifiConector implements Connector{
    doConnect(): boolean {
        console.log("Conectando via wifi");
        console.log("obteniendo clave");
        console.log("ip asignada por 24 horas");
        console.log("Conectado");
        return true
    }
}

export class System{
    constructor(private connector:Connector){
        connector.doConnect() 
    }
}

export class BluetoothConector implements Connector{
    doConnect(): boolean {
        console.log("Conectando via bluetooth");
        console.log("Emparejando con PIN");
        console.log("Conectado");
        return true
    }
}

//interfaces genericas

interface IStatus<U>{
    code:U;
}

interface IEvents<T>{
    list:T[];
    emit(event:T):void;
    getAll():T[];
}

class State<T> implements IEvents<T>{
    list: T[];
    constructor(){
        this.list=[];
    }
    emit(event: T): void {
        this.list.push(event);
    }
    getAll(): T[] {
        return this.list;
    }
    
}

const s= new State<IStatus<number>>();

s.emit({code:200});
s.getAll().forEach(event=>console.log(event.code));

//FALLO EN CODE
// const s2=new State<IStatus<Code>>();

// s2.emit({code:{message:'ok',status:200}});

// s2.getAll().map(event=>event.code).forEach(event=>{
//     console.log(event.message);
//     console.log(event.status);

// });








