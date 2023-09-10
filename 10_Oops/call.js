function setUsername(username){
    this.username = username;
}

function createUser(username,email,dob){
    this.email = email;
    this. dob  = dob;
    setUsername.call(this,username);
}

const chai = new createUser("Himadri","himadri@google.com","16052002");

console.log(chai);