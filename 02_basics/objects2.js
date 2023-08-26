const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Himadri";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someone@google.com",
    fullname: {
        userfullname: {
            firstName: "Himadri",
            lastName: "Roy",
            "Roll":33
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstName);
// console.log(regularUser.fullname.userfullname["lastName"]);
// console.log(regularUser.fullname.userfullname["Roll"]);

const obj1 ={
    1: "a",
    2: "c"
}

const obj2 ={
    3: "b",
    4: "d"
}
// Using assign method to assign object properties to new objects

let obj3 = {obj1,obj2};
console.log(obj3);

obj3 = Object.assign({}, obj1,obj2);
console.log(obj3);

// Using spread operator

const obj4 = {...obj1,...obj2};
console.log(obj4);

const users = [
    {
        id: "123abc",
        email: "h@gmail.com"
    },

    {
        id: "123sbc",
        email: "g@gmail.com"
    },
    {
        id: "123axc",
        email: "hg@gmail.com"
    },
]

// console.log(users[0].id);
// console.log(users[0].email);
// console.log(users[1].id);
// console.log(users[1].email);
// console.log(users[2].id);
// console.log(users[2].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("age"));


const course ={
    courseName : "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
}

// Object destructuring 

const {courseInstructor: instructor,price,courseName:sub} = course;

console.log(instructor);
console.log(sub);

