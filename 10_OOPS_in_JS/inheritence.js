class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username); // call the parent constructor
        this.email = email;
        this.password = password;
         
    }

    addCourse(){
        console.log(`A new course was aaded by ${this.username}`);
    }
}

const lucky = new Teacher("lucky", "lucky@gmail.com","1234");
console.log(lucky);

lucky.logMe();
const vijay = new User("vijay"); 
vijay.logMe();

console.log(lucky===vijay);
console.log(lucky===Teacher);
console.log(lucky instanceof Teacher);
console.log(lucky instanceof User);

