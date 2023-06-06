// simples / primitivas: Paso por valor
let numero = 10;
let str = 'jose montoya';

let numero2 = numero;
console.log('numero ', numero); // 10
console.log('numero 2 ', numero2); // 10
numero = 100;
console.log('numero ', numero); // 100
console.log('numero 2 ', numero2); // 10

let str2 = str;
console.log('str ', str); // jose montoya
console.log('str 2 ', str2); // jose montoya
str = 'daniel gloria';
console.log('str ', str); // daniel gloria
console.log('str 2 ', str2); // jose montoya