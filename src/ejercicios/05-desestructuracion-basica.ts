/*
    ===== Código de TypeScript =====
*/

//Desestructuración de objetos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 1,
    segundo: 33,
    cancion: 'Hola',
    detalles: {
        autor: 'Ed',
        anio: 2017
    }
}

// Desestructuración por nombre

/* const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles; */

const autor = 'Fulano';

/* Usualmente se extrae la propiedad con el mismo nombre, pero se le puede cambiar */
const { volumen: vol, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;

console.log('El volumen actual de ', vol);
console.log('El segundo actual de ', segundo);
console.log('La canción actual de ', cancion);
console.log('El autor es ', autorDetalle);

//Desestructuración de arreglos. La posición es importante

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz;
const [ , , p4 ] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p4);