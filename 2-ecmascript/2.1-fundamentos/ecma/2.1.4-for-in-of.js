const array = [100, 90, 110, 101, 12, 70];
const student = { id: 1, name: 'jose', app: 'montoya' };

// array con for tradicional
// for (let i=0; i<=array.length-1; i++) {
//     console.log(`Array[${i}] = ${array[i]}`); // Array[1] = valor
// }

// for of => Arrays
for (let iterador of array) {
    console.log(`element = ${iterador}`);
}


// iterar el objeto student con un ciclo for
// ???

// for in => Objectos
for (let key in student) {
    console.log(`student.${key} = ${student[key]}`); // student.key = valor
}