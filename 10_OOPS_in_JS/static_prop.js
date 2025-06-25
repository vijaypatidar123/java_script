class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return '1223'
    }
}
const lucky=new User("lucky");

// console.log(lucky.createId()); // 1223

class Teacher  extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone=new Teacher("iphone","i@phone.com")
iphone.logMe(); // Username is iphone
// console.log(iphone.createId()); // 1223
