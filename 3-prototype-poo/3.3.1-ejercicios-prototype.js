/**
 * Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual"
 *  en 1 y otro método "obtenerValor" que devuelva el valor actual.
 */

const contador = {
    valorActual: 0,
    incrementar(){
        this.valorActual++;
    },
    obtenerValor(){
        return this.valorActual;
    }
}

for (let index = 0; index < 7; index++) {
    contador.incrementar();   
}

/** 
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
*/
console.log(contador.obtenerValor());


/**
 * Crear una clase "círculo" con propiedad "radio" 
 * y constante "pi" y un método "area" que calcule el área del 
 * círculo.
 */
const pi = 3.1416;

class Circulo{
    constructor(radio){
        this.radio = radio
    }

    area(){
        let r2 = (this.radio) * (this.radio)
        return pi * r2;
    }
}

const circulo1 = new Circulo(15)

console.log(circulo1.area())
console.log(circulo1.area)
