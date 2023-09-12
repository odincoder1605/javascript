// const descripter = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(descripter);

// let chai ={
//     username : "Chai",
//     price : 250,
// }

// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

// Object.defineProperty(chai,"price",{
//     writable: false,
//     enumerable:true
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

// chai.price = 100;
// console.log(chai);

let student ={
    name : "Himadri Roy",
    roll : 24000121023,
    sem : 3,
    showDetails: function(){
        console.log(`Name:${this.name}
        Roll:${this.roll}
        Sem: ${this.sem}`);
    }
}

// console.log(Object.getOwnPropertyDescriptors(student,"name","roll"));

Object.defineProperties(student,{"name":{
    writable:false,
    enumerable:true
},"roll":{
    writable:false,
    enumerable:true
}});

// console.log(Object.getOwnPropertyDescriptors(student,"name","roll"));

for (let [key,value] of Object.entries(student)){
    if(typeof value!=='function')
    console.log(`${key}:${value}`);
}

Object.defineProperties(student,{"showDetails":{
    writable:false,
    enumerable:false
},"roll":{
    writable:false,
    enumerable:false
}});

for (let [key,value] of Object.entries(student)){
    // if(typeof value!=='function')
    console.log(`${key}:${value}`);
}