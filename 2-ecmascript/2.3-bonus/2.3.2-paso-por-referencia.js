// complejas: Paso por referencia
let array = [100, 90, 110, 101, 12, 70];
let student = { id: 1, name: 'jose', app: 'montoya' };

let array2 = array;
console.log('array ', array);
console.log('array 2 ', array);
array.push(99999999);
console.log('array ', array);
console.log('array 2 ', array2);

let student2 = student;
console.log('student ', student);
console.log('student 2 ', student2);
student.name = 'daniel';
console.log('student ', student);
console.log('student 2 ', student2);