const dias=['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

class Nota{

    static contadorNota=0;
    constructor(titulo,contenido,estado){
        this._id=++Nota.contadorNota;
        this._estado=estado
        this._titulo=titulo;
        this._contenido=contenido;
        this._fecha= `${new Date().getHours()}:${new Date().getMinutes()} ${(dias[new Date().getDay()])} ${(new Date().getMonth())} ${(new Date().getFullYear())}`;
    }
    
    get fecha(){
        return this._fecha;
    }
    get titulo(){
        return this._titulo;
    }
    get contenido(){
        return this._contenido;
    }
    get id(){
        return this._id;
    }
}








