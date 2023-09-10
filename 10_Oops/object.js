function multiple5(num){
    return num*5;
}

multiple5.power = 2;
console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);

function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("Chai",25);
const tea = new createUser("tea",250);

chai.printMe()