class Person {
constructor(){

}
}
const person10 = {
    firstName: "John",
    age:30
};
class Person1 {
    personFirstName:string;
    personAge:number;
    constructor(firstName :string, age:number){
          this.personFirstName = firstName; 
          this.personAge = age;

    }
}

const alice = new Person1("Alice",25); // вызов класса через new, который создает объект этого класса
const bob  = new Person1("Bob", 16)// второй экземпляр класса 
console.log(alice);
console.log(bob);
console.log(alice.personFirstName);//обращение к свойству объекта класса


class Person2 {
    personFirstName:string;
    personAge:number;
    constructor(firstName :string, age:number){
          this.personFirstName = firstName; 
          this.personAge = age;
    }
greeting(): string {
    return "Hello everyone";
}
}
const alice1 = new Person2("Alice",25);
console.log (alice1.greeting());

const arr = new Array();
const obj = new Object();
const person3 = new Person();

//  предотвратить изменения в классе  -  readonly
//class Person4{
    //readonly firstName4:string;
    //age:number;

// поля класса могут иметь свойства, которые видны только внутри этого класса
class Person5 {
    personFirstName:string;
    private personAge:number;
    constructor(firstName :string, age:number){
          this.personFirstName = firstName; 
          this.personAge = age;

    }
}

const alice5 = new Person1("Alice",25); // вызов класса через new, который создает объект этого класса
const bob5  = new Person1("Bob", 16)// второй экземпляр класса 
console.log(alice);


