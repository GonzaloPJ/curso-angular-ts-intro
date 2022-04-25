/*
    ===== Código de TypeScript =====
*/

//Desestructuración de argumentos

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'Ipad',
    precio: 350
}

function calculaISV( productos: Producto[]): number {
    let total = 0;
    productos.forEach( (producto) => {
        total += producto.precio
    })
    return total * 0.15;
}

export function calculaISVdes( productos: Producto[]): number[] {
    let total = 0;
    /* desestructurando las propiedades del objeto Producto */
    productos.forEach( ({precio}) => {
        total += precio
    })
    return [total, total * 0.15];
}

const articulos = [ telefono, tableta ];

const [ total, isv ] = calculaISVdes(articulos);

console.log('Total:', total);
console.log('ISV:', isv);