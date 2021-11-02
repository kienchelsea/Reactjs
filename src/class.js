class human {
    constructor(){
        this.gender = "Male";
    }
    sayGender(){
        console.log(this.gender);
    }
}
class person extends human {
    constructor() {
        super();
        this.name = "Kien"
        this.gender = "FeMale";
    }
    sayHello(){
        console.log(this.name)
    }
}
const Person = new person();
Person.sayHello();
Person.sayGender();