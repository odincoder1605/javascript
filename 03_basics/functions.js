
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("R");
    console.log("I");
}

// console.log(sayMyName);
// sayMyName();

function addTwoNumbers(number1,number2){
    return number1 + number2;
}

const result = addTwoNumbers(3,5);
// console.log(result); 

function loginUserMessage(username){
   console.log(`${username} just logged in`);
}

loginUserMessage("Himadri");

// Taking multiple arguments in function 

function calculateCart(...item1)
{
    return item1;
}

console.log(calculateCart(10,20,30,40));

const user ={
    username: "Himadri",
    price: 1000
}

// Passing object as function argument

function userDetails(anyobject)
{
    console.log(`Username is ${anyobject["username"]} and price is ${anyobject.price}`);
}

userDetails(user);

// Direct passing of object 

userDetails
({
    username: "Anik",
    price: 400
});

// Passsing arrays as function argument

let myArray = [100,500,400,100];

function arrayInput(fetchArray)
{
    for(let i=0;i<fetchArray.length;i++)
    console.log(fetchArray[i]);
}

arrayInput(myArray);