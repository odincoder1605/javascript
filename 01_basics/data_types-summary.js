// Primitive data type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const outsideTemp = null;

let userEmail;

const id =Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 2531654124964n;

// Reference type (Non primitive)

// Array, Objects, Functions 

// Javascript is dynamically typed language

const heros = ["Shaktiman","Iron Man","Nagraj"];

const myObj ={
    name : "Himadri",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof null);
console.log(typeof myFunction);

