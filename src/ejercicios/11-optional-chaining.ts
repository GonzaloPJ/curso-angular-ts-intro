/*
    ===== Código de TypeScript =====
*/

//Encadenamiento

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {

    const cuantosHijos = pasajero.hijos?.length || 0; //Intenta evaluar los hijos. si devuelve undefined, entonces 0. No es necesario hacer un if.
    console.log(cuantosHijos);

}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);