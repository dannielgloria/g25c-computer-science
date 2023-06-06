const array = [100, 90, 110, 101, 12, 70];

// array.map((element, i) => {
//     console.log(`element[${i}] = ${element}`); // element[index] = valor
// });

// array.forEach((iterador, index) => {
//     console.log(`element[${index}] = ${iterador}`); // element[index] = valor
// });

// console.log('con patitos') // NO USAR NOMBRES NO DESCRIPTIVOS EN SUS VARIABLES
// array.forEach((patito, pata) => {
//     console.log(`element[${pata}] = ${patito}`); // element[index] = valor
// });

// Obtener los numeros mayores o igual a 100 del array y guardarlos en un nuevo array

// map: retorna cada uno de sus elementos
// no usar el break
const mayor100Map = array.map((element, i) => {
    if (element >= 100) {
        return element;
    }
});
console.log(mayor100Map);

// map: no retorna cada uno de sus elementos
// no usar el break
const mayor100ForEach = array.forEach((element, i) => {
    if (element >= 100) {
        return element;
    }
});
console.log(mayor100ForEach);