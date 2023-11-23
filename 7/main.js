class Person {
    static #retrimengentAge = 65
    #password
    #name
    
    constructor (name, age, password){
        this.name = name;
        this.age = age;
        this.#password = password;
    }
    


    print (password){
       if(password == this.#password) console.log(this.#name);
    }
    
    
    get name(){
        return this.#name
    }
    set name (name) {
        if (name.length >= 3){
            this.#name = name;
        }
        else{
           this.#name = "default name"
        }
    }
    static classInfo(age){
        if (Person.#retrimengentAge > age) {
            console.log('Иште жиgар');
            
        }else{
            console.log('Карыпсын');
        }
    }


}
Person.classInfo(55);

class Employee extends Person{
    constructor(name, age, password, company){
        super(name, age, password)
        this.company = company;
    }
    print(password){
        super.print(password);
        console.log('hello');
    }
    
    
}

let user = new Person ('Madd', 21 , 1234 );
let user2 = new Employee('Azat', 21, 1234, 'geeks');

Employee.classInfo(181);

user2.print(1234);
console.log(user2.name);
console.log(user.name);
 

// console.log(Person.retrimengentAge)
