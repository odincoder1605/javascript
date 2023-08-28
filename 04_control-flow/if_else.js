// if 

// if (condition){
    
// }

const isUserLoggedIn = true;

// if (isUserLoggedIn){
//     console.log("Logged In");
// }

// conditional operators --> <,>,<=,>=,==,!=,===

// if(3=="3")
// {
//     console.log("Executed");
// }

// if(3 === "3")
// {
//     console.log("Strictly executed");
// }

// let temperature = 50;
// if(temperature > 50){
//     console.log("Temperature is greater than 50");
// }
// else{
//     console.log("temperature is either equal to 50 or less than 50");
// }

// const score = 200;

// if(score > 100) {
//     const power = "fly";
//     console.log("User Power: ",power);
// }

// Shorthand notation for if else

let balance = 1000;

// if (balance > 500) console.log(`Balance is greater than 500`),console.log("implicit execution");

// if(balance > 500 )
// console.log(`Balance is greater than 500`);

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}