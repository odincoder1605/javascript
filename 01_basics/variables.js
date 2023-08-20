const accountId = 14235;
let accountEmail = "himadri@google.com";
var accountPassword ="12543";
accountCity = "Kolkata";
let accountState;

// accountId = 2; not allowed 

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

accountEmail ="royhimadri@google.com";
accountCity = "Jaipur";
accountPassword ="12456";

console.table([accountId,accountEmail,accountCity,accountPassword]);

/*
    Prefer not to use var keyword
    because of issue in block scope and functional scope
*/
