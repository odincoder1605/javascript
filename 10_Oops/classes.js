class user {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new user("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene of class 

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changeUsername = function(){
    return this.username.toUpperCase();
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

const coffee = new User("Himadri","himadri@google.com","1234");
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());