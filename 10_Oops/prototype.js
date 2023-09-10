let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log("Hitesh is present in all object");
}

// heroPower.hitesh();

// myHeros.hitesh();

Array.prototype.heyHitesh = function(){
    console.log("Hitesh says hello");
}
myHeros.heyHitesh();
// heroPower.heyHitesh();

// inheritance

const User ={
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();