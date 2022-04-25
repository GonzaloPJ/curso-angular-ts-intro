/*
    ===== Código de TypeScript =====
*/


class Heroe3 {
    // si no se especifica, por defecto las propiedades y métodos son públicas.
    private alterEgo: string; //solo visible dentro de la clase
    public edad: number; //visible fuera de la clase
    static nombreReal: number; //se puede acceder al valor de la propiedad sin crear una instancia de la clase
}

class Heroe2 {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    imprimirNombre() {
        return this.alterEgo + ' ' + this.nombreReal;
    }
}

//En la interfase no se puede indicar cómo se implementa una función.
interface Personaje2 {
    alterEgo?: string;
    edad?: number;
    nombreReal?: number;

    imprimirNombre?: () => string;
}


Heroe3.nombreReal;
const ironman2 = new Heroe3();
const spiderman: Personaje2 = {};

ironman2.edad; //única propiedad pública
console.log(ironman2);

//Constructor de una clase es una función que se ejecuta al inicializarse la clase.

class Heroe1 {
    /* alterEgo: string;
    edad: number;
    nombreReal: number; */

    constructor(
        public alterEgo: string,
        public edad?: number, //sigo de interrogación en este caso significa opcional
        public nombreReal?: string
    ) {}
}

// similar a class Heroe
class Heroe4 {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    constructor( alterEgo: string ) {
        this.alterEgo = alterEgo;
    }
}


// Extender una clase

class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) {}

}

class Heroe extends PersonaNormal {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA'); //llama al constructor de PersonaNormal. Sin this.nombreReal, estoy usando el parámetro nombreReal del constructor.
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);