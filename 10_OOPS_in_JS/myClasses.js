// ES6

/*
class User{
    constructor(username,email,password){ 
        this.username = username;
        this.email = email;
        this.password = password;
    } 
    encrptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const lucky=new User("lucky","lucky@gmail.com","!234")

console.log(lucky.encrptPassword());
console.log(lucky.changeUsername())

*/

// behind the scene 
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const lucky = new User("lucky", "lucky@gmail.com", "123")

console.log(lucky.encryptPassword());
console.log(lucky.changeUsername());