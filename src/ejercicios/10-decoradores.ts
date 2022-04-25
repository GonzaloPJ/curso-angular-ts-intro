/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

//Decoradores de clases.

@classDecorator // Los decoradores trabajan antes de la creación de la instancia. Sirven para expandir o añadir funcionalidades.
class MiSuperClase {
    public miPropiedad: string = 'ABC123'; //aparece al crearse las instancias

    imprimir() { //aparece al crearse las instancias
        console.log('Hola Mundo');
    }
}

//En angular casi todo es una clase.

console.log(MiSuperClase); //no instancia.

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );
/* console.log( miClase.newProperty ); */
