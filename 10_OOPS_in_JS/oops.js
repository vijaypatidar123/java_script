/*
javascript and classes
OOP
Object
collection of properties and methods
toLowerCase
why use OOP
parts of OOP
Object literal

Constructor function
Prototypes
Classes
Instances (new, this)
4 pillars
Abstraction Encapsulation Inheritance Polymorphism
*/
/*
const user ={
    username:"lucky",
    loginCount:8,
    signedIn:true,
    
    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`);
        console.log(this);
    }
}
console.log(user .username);
console.log(user.getUserDetails());

*/

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    // return this
}
const userOne=new User("Lucky",12,true)
const userTwo=new User("VJ",21,false)

console.log(userOne);
console.log(userTwo);

