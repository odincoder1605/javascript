const user = {
    username : "Himadri",
    isloggedIn : true,

    getUserDetails : function(){
        // console.log("Got details from database");
        // console.log(`username: ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// user.getUserDetails();

// console.log(this);

function User(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    return this;
}

const userOne = new User("Himadri",10,false);
const userTwo = new User("Hitesh",10,true);
console.log(userOne);
console.log(userTwo);