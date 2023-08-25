// arrays

const myArr = [0,1,2,3,4,5,6,"Himadri"];

console.log(myArr[6]);

const myHeros = ["Shaktiman","Iron Man","SpiderMan"];

console.log(myHeros[0]);

const marks = new Array(10,20,30,40,50)
console.log(marks.length);

// Array methods

myArr.push(10);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes("Himadri"));
console.log(myArr.includes("Rupa"));

console.log(myArr.indexOf("Himadri"));
console.log(myArr.indexOf(256));

const newArr = myArr.join()

console.log(newArr);
console.log(`The type of newArr is ${typeof newArr}`);

// slice , splice

let value = [1,2,3,4,5,6,7,8,9];

console.log("A ",value);
console.log();

let newArray = value.slice(1,3);

console.log(`After using slice() method`);
console.log();

console.log("A ",value);
console.log("B ",newArray);
console.log();

newArray = value.splice(1,3);

console.log(`After using splice() method`)
console.log();

console.log("A ",value);
console.log("C ",newArray);

const marvel_heros = ["Spiderman","thor","ironman"];
const dc_heros = ["batman","superman","flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

// const num = [2,1,3];
const arr = [["Spiderman","Superman"],["Batman","thor"]];

// num.push(arr);
// console.log(num);

// let heros = num.concat(arr);
// console.log(heros);

const new_heros =[...marvel_heros,...dc_heros,...arr];
console.log(new_heros);

let narr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
value = narr.flat(2);
console.log(value);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Himadri"));
console.log(Array.from({name:"Himadri"})); // Interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));