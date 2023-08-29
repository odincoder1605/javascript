// for of loop

// let myArray = [1,2,3,4,5];

// for (const val of myArray) {
//     console.log(val);
// }

let my2dArray = [[1,2,3],[4,5,6,],[7,8,9]];

// for (const val of my2dArray) {
//     for(const arr of val)
//     {
//         console.log(val);
//     } 
// }

let greeting ="Hello World!";

// for (const char of greeting){
//     if(char ==' '){
//         continue;
//     }
//     console.log(`The character is:${char}`);
// }

// Maps

const map = new Map();

map.set('IN',"India");
map.set('Fr',"France");
map.set('USA',"United States of America");
map.set('Aus',"Australia");

console.log(map);

for (const [key,value] of map){
    console.log(key,':-',value);
}

const myObj ={
    'game1': 'Valorant',
    'game2': 'Spiderman'
}

// for (const {key,val} of myObj) {
//     console.log(`${key}->${value}`);
// }
