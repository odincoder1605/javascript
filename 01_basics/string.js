const firstName = "Himadri";
const secondName = " Roy";

console.log(firstName + secondName);

// String interpolation method 

console.log(`My name is ${firstName}${secondName}`);

// Declaration of string 

const userName = new String("Himadri Roy");

console.log(`The name of the user is ${userName}`);

console.log(firstName[0]);
console.log(userName[0]);

console.log(firstName.__proto__);
console.log(userName.__proto__);
console.log()

// Some methods on String

console.log(firstName.toUpperCase());
console.log(firstName.charAt(2));
console.log("dadi".indexOf('d'));


let value = "Mathematics";
const subString = value.substring(0,4);
console.log(subString);

const anotherString = value.slice(-3);
console.log(anotherString);

value = "      HIMADRI      ";
console.log(value);
console.log(value.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','-'));

