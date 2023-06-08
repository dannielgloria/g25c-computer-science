const array = [21, 7, 9, 15, 95] //Variable const que no se cambia debido a que es una variable constante
let suma = 0 // Variables modificadas por bloque

for (let i= 0; i < array.length; i++){
    suma += array[i]
}
/*
1) suma = 21    i=1
2) suma = 28    i=2
3) suma = 37    i=3
4) suma = 52    i=4
5) suma = 147   i=5
*/
console.log(suma) // 147