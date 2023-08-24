// dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

// Date month starts with 0 in Javascript

let myCreatedDate = new Date(2023,1,24);
let myNewDate = new Date(2023,0,24);
console.log(myCreatedDate.toDateString());
console.log(myNewDate.toDateString());

let myTimeDate = new Date(2024,4,16,0,0);
console.log(myTimeDate.toLocaleDateString());
console.log(myTimeDate.toLocaleString());

let dateCreatedByMe = new Date("2023-05-14");
console.log(dateCreatedByMe.toDateString());
// console.log(dateCreatedByMe.toLocaleString());

dateCreatedByMe = new Date("05-16-2023");
console.log(dateCreatedByMe.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(dateCreatedByMe.getTime());

console.log(Math.floor((Date.now())/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})