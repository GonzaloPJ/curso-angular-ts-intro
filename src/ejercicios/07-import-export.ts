/*
    ===== Código de TypeScript =====
*/

import { calculaISVdes, Producto } from "./06-desestructuracion-funcion" /* importa desestructurando el objeto. No es necesario poner el .ts */

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISVdes( carritoCompras );

console.log( 'Total: ', total);
console.log( 'ISV: ', isv );
