// function sayHello() {
//     console.log('Hola!!');
// }

// version arrow
const sayHello = () => {
    console.log('Hola!!');
}

// version arrow
const sayGoodbye = () => console.log('Bye!!');

// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// version arrow
const sum = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

sayHello();
sayGoodbye();
console.log(sum(45, 45));