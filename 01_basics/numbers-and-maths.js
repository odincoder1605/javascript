const score = 400;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.4846;

console.log(otherNumber.toPrecision(2));

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++ MATHS ++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

// console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min +1))+min))
