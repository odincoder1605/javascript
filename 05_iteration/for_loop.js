// for loop

// for (let i = 0; i < 10; i++) {
//     if(i==5){
//         console.log("5 is best number");
//     }    
//     console.log(i);
// }

// for(let i = 1;i<=10;i++)
// {
//     console.log(`The outer loop iteration number  is ${i}`);
//     for(let j = 1;j<=10;j++)
//     // console.log(`The value of j is ${j}`);
//     console.log(`${i} * ${j} = ${i*j}`);
// }

let myArray = ["Batman","SuperMan","Flash"];

// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }

// break and continue

// for (let i = 1; i<=20; i++) {
//        if(i==5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <=10; i++){
    if(i==5){
        console.log(`5 detected`);
        continue;
    }
    console.log(i);
}