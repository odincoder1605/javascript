// Immediately Invoked Function Expression

(function chai(){
    // Named IFEE
    console.log("DB CONNECTED");
})();

( () => {
    console.log("DB CONNECTED 2");
})();

console.log(( (num1,num2) => (num1+num2))(6,9));