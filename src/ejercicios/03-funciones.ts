/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado = sumar(1, 2);
const resultado2 = multiplicar(4, 5);
const resultado3 = multiplicar(4, 0, 5);


console.log(resultado);
console.log(resultado2);
console.log(resultado3);


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    return undefined; //por defecto
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strinder',
    pv: 50,
    mostrarHp() {
        console.log( this.pv );
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();

