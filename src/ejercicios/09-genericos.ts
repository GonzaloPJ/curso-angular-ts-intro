/*
    ===== Código de TypeScript =====
*/

//Uno de los principales usos es para saber qué tipo de dato se obtendrá de una función.
function queTipoSoy<T>(parametro: T) { /* T es un estándar para definir el genérico */ /* Se puede especificar
el tipo de dato de lo que retorna la función */
    return parametro;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);
let soyExplicito = queTipoSoy<string>('Hola Mundo');
