class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }

    get email(){
        return this.email.toUpperCase();
    }
    
    set email(email){
        this._email = email
    }
}

const student = new User("student@aiem.com","abc");
console.log(student.password);



