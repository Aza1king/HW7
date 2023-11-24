class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    
    print() {
        console.log(`Имя - ${this.name}; Возраст - ${this.age}`);
    }
}
let user = new User("КОТ", 20);
user.print();

class Student extends User {
    #password;
    
    constructor(name, age, username, password) {
        super(name, age);
        this.username = username;
        this.#password = password;
    }
    
    print(Password) {
        if (Password === this.#password) {
            console.log(
                `Имя - ${this.name}; Возраст - ${this.age}; Имя - ${this.username}`
                );
    } else {
      console.log("Неверный пароль");
    }
}
}


let student = new Student("СОБАКА", 20, "DOG", "sleepdog");

student.print("sleepdog");
