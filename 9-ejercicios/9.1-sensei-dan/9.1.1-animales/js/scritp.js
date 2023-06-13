// Clase base/Madre/Padre Animal
class Animal{
    constructor(name, age, gener, photo){
        this.name = name;
        this.age = age;
        this.gener = gener;
        this.photo = photo;
    }

    // Metodo para obtener la informacion de nuestro animal
    getInfo(){
        return `Nombre: ${this.name}, Edad: ${this.age}`;
    }

    getPhoto(){
        return this.photo;
    }
}

// Clase derivad/hija/hijo Perro
class Perro extends Animal{
    constructor(name, age, breed,photo){
        super(name,age,photo);
        this.breed = breed;
    }

    getInfo(){
        return `${super.getInfo()}, Raza: ${this.breed}`;
    }
}

// Clase derivas/hija/hijo Gato
class Gato extends Animal{
    constructor(name, age, color,photo){
        super(name,age,photo);
        this.color = color;
    }

    getInfo(){
        return `${super.getInfo()}, Color: ${this.color}`;
    }
}

// Crear instancias de perro y gato
const perro1 = new Perro('Solobino', 3, 'sin raza','https://ep01.epimg.net/verne/imagenes/2017/05/23/mexico/1495504993_964103_1495564462_noticia_normal.jpg');
const perro2 = new Perro('Fito', 1, 'Pug','https://i.ytimg.com/vi/GY5_z1H97fE/maxresdefault.jpg');
const gato1 = new Gato('Michi', 12, 'Naranja','https://xn--seordongato-2db.com/wp-content/uploads/2022/10/gato-de-color-naranja-1.webp');
const gato2 = new Gato('Garfield', 14, 'Azul','https://pbs.twimg.com/profile_images/1175095293114634241/MMdPULKJ_400x400.jpg');

// Obtener el elemnto DOM dodnde mostraremos la info del animal
const animalInfoElement = document.getElementById('animal-info');

// Mostrar la informacion del perro en elemento DOM
const perroInfoElemnt = document.createElement('p')
perroInfoElemnt.textContent = perro1.getInfo();
animalInfoElement.appendChild(perroInfoElemnt)

const perroInfoImg = document.createElement('p')
perroInfoImg.textContent = perro1.getPhoto();
animalInfoElement.appendChild(perroInfoImg)



const perroInfoElemnt1 = document.createElement('p')
perroInfoElemnt1.textContent = perro2.getInfo();
animalInfoElement.appendChild(perroInfoElemnt1)

const perroInfoImg1 = document.createElement('a')
perroInfoImg1.textContent = perro2.getPhoto();
animalInfoElement.appendChild(perroInfoImg1)



// Mostrar la info del gato en elemento DOM
const gatoInfoElement1 = document.createElement('p')
gatoInfoElement1.textContent = gato1.getInfo()
animalInfoElement.appendChild(gatoInfoElement1)

const gatoInfoImg1 = document.createElement('a')
gatoInfoImg1.textContent = gato1.getPhoto()
animalInfoElement.appendChild(gatoInfoImg1)



const gatoInfoElement = document.createElement('p')
gatoInfoElement.textContent = gato1.getInfo()
animalInfoElement.appendChild(gatoInfoElement)

const gatoInfoImg = document.createElement('p')
gatoInfoImg.textContent = gato1.getPhoto()
animalInfoElement.appendChild(gatoInfoImg)