// singleton object is created by constructor

// Object.create(); Constructor method of creating object

// Object literals 

const mySym = Symbol("key1");

const JsUser = {
    name: "Himadri",
    age: 21,
    location: "Kolkata",
    email: "himadri@google.com",
    [mySym]: "mykey1",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Thursday"],
    "School": "Bethany School"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["School"]);
// console.log(JsUser[mySym]);

// Changing the value of a key in object

JsUser["School"] = "KalyaniCentralModel";
// console.log(JsUser);

// Object.freeze(JsUser);
// JsUser.age = 22;
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user`);
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());