const user = {
    username: "Himadri",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Anik";
// user.welcomeMessage();


// In node environment the current global context is empty it refers to an empty object

// In browser environment the global object is "window object"

// console.log(this);

function chai(){
    console.log(this);
}

// chai();

function coffee() {
    let coffeeName = "Nescafe";
    // console.log(this.coffeeName);
    console.log(this);
}

// coffee(); // The this keyword works with object only

const sugar = function(){
    let sugarname = "BrownSugar";
    // console.log(this.sugarname);
    console.log(this);
}

// sugar();

// Arrow function

const arrowFunction = () => {
    username = "ArrowFunction";
    console.log(this.username);
    console.log(this);
}

arrowFunction();

// Explicit return in arrow function

const addThree = (num1,num2,num3) => {
    return num1 + num2 + num3;
}

console.log(addThree(6,7,8));

// Implicit return in arrow function

const addTwo = (num1,num2) => (num1+num2);

console.log(addTwo(3,5));

// Returning object using arrow function

const returnObj = () => ({userId:"123abc"});

console.log(returnObj());
