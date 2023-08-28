let userEmail = "him@google.com";

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have any user email")
// }

userEmail = "";

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have any user email :(")
// }

userEmail = null;

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have any user email :(-")
// }

userEmail = [];

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have any user email :(")
// }

// code to check whether array is empty

if(userEmail.length === 0){
    console.log("Array is empty");
}


userEmail={

};

// code to check if the object is empty

if(Object.keys(userEmail).length === 0){
    console.log("Object is empty");
}

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have any user email :(")
// }


// falsy values 

// false , 0 , -0 , BigInt 0n , "", null, undefined, NaN

// truthy values 

// "0","false"," ",[],{},function(){};

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10;






console.log(val1);

