/**
 * La herencia es un concepto importante en la programación orientada a objetos que 
 * permite que una clase herede propiedades y métodos de otra clase. En JavaScript, 
 * la herencia se implementa mediante la palabra clave extends que permite a una 
 * clase hija heredar de una clase padre.
 * La clase hija es una nueva clase que se crea a partir de una clase padre existente, 
 * y hereda las propiedades y métodos de la clase padre. La clase hija puede extender o 
 * modificar el comportamiento de la clase padre, y también puede agregar nuevas 
 * propiedades y métodos propios.
 */

// clase Madre de la cual heredaremos informacion
class Animal{
    constructor(nombre, edad, tipo){
        this.edad = edad
        this.nombre = nombre
        this.tipo = tipo
    }

    comer(){
        console.log(`El animal ${this.nombre} come muy rapido`)
    }

    traeInfo(){
        console.log(`El animal ${this.nombre} es un ${this.tipo}`)
    }
}

class Vaca extends Animal{
    constructor(nombre, edad, tipo, peso){
        super(nombre, edad,tipo)
        this.peso = peso
    }

    pasta(){
        console.log(`La Vaca ${this.nombre} tiene cabeza y tiene cola y hace muuuuu y pesa ${this.peso} Kg`)
    }
}

class Gato extends Animal{
    constructor(nombre, edad, tipo, color){
        super(nombre,edad,tipo)
        this.color = color
    }

    maullar(){
        console.log(`El Gato ${this.nombre} es color azul`)
    }
}

var animal1 = new Animal("Solobino", 12)
var vaca1 = new Vaca("Lola",10,"vaca", 100)
var gato1 = new Gato("Benito Bodoque", 10,"gato", "azul")

animal1.comer();
vaca1.pasta();
vaca1.comer();
vaca1.traeInfo()
gato1.maullar();
gato1.comer();
gato1.traeInfo()