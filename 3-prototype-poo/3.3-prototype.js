 /**
  * En JavaScript, todos los objetos tienen un prototipo. Cuando se accede a 
  * una propiedad o método en un objeto, y este no lo tiene directamente, 
  * JavaScript busca en su prototipo para encontrarlo. Esto permite compartir 
  * propiedades y métodos comunes entre múltiples objetos y facilita la 
  * herencia de características.
  */


// Definimos un objeto como prototipo
var personaPrototype = {
    saludar(){
        console.log("Hola, yo soy "+ this.nombre);
    }
}

// Creamos un objeto basado en el prototipo
var persona1 = Object.create(personaPrototype);

persona1.nombre = "Montoya"
persona1.pelicula = "hp"

// Accedemos al método del prototipo a través del objeto
persona1.saludar(); // Output: Hola, yo soy Montoya

var persona2 = Object.create(personaPrototype);

persona2.nombre = "Maria"
persona2.saludar();
