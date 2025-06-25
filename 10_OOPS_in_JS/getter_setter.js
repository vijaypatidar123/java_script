class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    } 
    set password(value){
        this._password=value.toUpperCase()
    }
}

const lucky = new User("lucky@gmail.com", "lucky123");
console.log(lucky.password);
console.log(lucky.email);

