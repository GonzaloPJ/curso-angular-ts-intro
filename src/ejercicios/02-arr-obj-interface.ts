/*
    ===== Código de TypeScript =====
*/

//Arreglo. No es buena práctica usar any
let habilidades: (boolean | string | number)[] = ['Bash', 'Counter', 'Healing', 100];
let habilidades2: string[];

habilidades.push(true);

const personaje1 = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

const personaje2: any = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje2.puebloNatal = 'Pueblo Paleta';

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
