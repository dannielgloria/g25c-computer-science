// Definimos una clase
class Laptop{
    constructor(noSerie, marca, modelo, color, tamaño){
        this.noSerie = noSerie //Estos son los atributos
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.tamaño = tamaño
    }

    // Definimos metodo que es una funcion que nos traera la info de la laptop
    infoLap(){
        console.log("Esta increibele laptop marca "+ this.marca + " tiene un tamaño de "+ this.tamaño)
    }

    muestraVideo(){
        console.log("estoy reproduciento un video en una pantalla de "+ this.tamaño)
    }

}

const lapItzel = new Laptop(56585, "Mac", "Pro", "Oro", 15)
const lapMontoyita = new Laptop(102938, "Alienware", "Nuevo", "Oro Morado", 20)

lapItzel.infoLap();//Laptop.infoLap() con los atributos (56585, "Mac", "Pro", "Oro", 15)
lapItzel.muestraVideo();

lapMontoyita.infoLap();
lapMontoyita.muestraVideo();
