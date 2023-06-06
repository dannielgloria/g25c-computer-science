// var: Permite definir una variable en un scope global.
/**
 * No es la mejor practica utilizar ya que podemos sobreeescribir valores y generar errores
 */
var titlePage = 'Dev.f .io';

// let: Permite definir una variable en un scope especifico. // es6
function sum(num1, num2) {
    // ERROR porque result solo estaria alcanzable dentro if (scope/ambito de vida)
    // if (true) {
    //     let result = num1 + num2;
    // }
    let result = num1 + num2;
    console.log(result);
    return result;
}
// console.log(result);
console.log(sum(20, 50));

var n1 = 40;
var n2 = 20;
function substract(n1, n2) {
    var resultSubs = n1 - n2;
    return resultSubs;
}
// console.log(resultSubs);

console.log(substract(20, 10)); // 10
n1 = 90;
console.log(substract(20, 10)); // 10

// https://udn.realityripple.com/docs/Web/JavaScript/Reference/Errors/Not_defined

let name;
name = 'daniel';
console.log('name:', name);
name = 'griselda';
console.log('name:', name);

// const app;
// app = 'montoya';
// Uncaught SyntaxError: Missing initializer in const declaration

const APP = 'montoya';
console.log('app:', APP);
// app = 'mendez'; // Uncaught TypeError: Assignment to constant variable.
console.log('app:', APP);

/**
 * constantes
 * Nombrarlas con mayuscula cuando son valores de referencia o comparacion en nuestro sistema.
 * Ejemplos: const MAYOR_AGE = 18; const PI = 3.1416; const RFC = 'RFC';
 * Nombrarlas con minusculas cuando no son valores de referencia o comparacion y son simples variables
 * Ejemplos:
 * for (let i=0: i<11; i++) {
 * console.log(i)
 * }
 */

/**
 * const, sino let, sino enviar parametro, sino var (si use var en un 99.99% de las veces algo hice mal)
 */