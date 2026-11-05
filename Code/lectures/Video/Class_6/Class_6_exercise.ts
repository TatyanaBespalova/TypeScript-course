import { isTrueLiteral } from "typescript/unstable/ast";

// объекты  - тип данных
const person  = {
    firstName: "John",
    age : 30,
    occupation: "teacher"

};
console.log(person);
console.log(person.firstName)// распечатка свойств объекта

// вложенные объекты
const person1 = {
    id: 1,
    personalInfo: {
        name: "John Smith",
        age: 30,
        address: {
            address1: "1 Main street",
            city: "LA",
            state: "CA" 
        },
         phone: "123"   
    },
    car: "Toyota",
    "like birds" : true

};
console.log(person1.id);
console.log(person1  .personalInfo.age);
console.log(person1[ "like birds"]);
// изменение значения ключа
person1.personalInfo.name = "Bob";

 // название ключа приходит извне - api calls,  
 let skiier :string = "great skiier";
 const user2 = {
    name: "John",
    age :20,
    [skiier] :true
    
 };
//user16[carModel] = "Volvo"; // название переменной
//user16["carModel"] = "Volvo"; // название ключа 

//проверка существование ключа, ключ в кавычках
console.log("age" in user2); //true
console.log("occupation" in user2); // false

console.log(Object.hasOwn(user2,"age"));// true
console.log(Object.hasOwn(user2,"occupation")); //false

//функция, которая является свойством объекта, называется ее методом 

const person6 = {
 name: "Jim",
 eyes: "Blue",
 age:30,

 greetings: function () // function можно опустить
 {
    return "Hello,everyone!";
 }

};
console.log(person6.greetings());

// можно заменить стрелочной функцией
greetings: () => {
    return "Hello,everyone!";
}

//ключевое слово this
const person15 = {
    name: "Jim",
    eyes: "Blue",
    age: 30,
    
    greetings() {
        return "Hello, everyone! My name is $(this.name) and my eyes are $(this.eyes) and I am $(this.age) years old";
        
        // конкретныый, текущий объект, и значение this будет являться person. 
        // его значение выполняется во время выполнения кода.
        // this -   всегда только внутри объекта и относится только к этому объекту 
    }

};
console.log (person15.greetings());

person15.name = "Bob";
console.log (person15.greetings()); //поменял экземпляр объекта, поэтоиу распечается Bob
//  объект у нас один, а экземпляров этого объкта  - два




let name17 = "John";
const person18 = {
    name1: "James",
    [name17] : "Jim",
    eyes : "Blue",
    age :30,
greetings() {
    let name1 = "Alice";
    return "Hello, my name is $(this(name1))."//при обращении к name1 пытается найти Alice: _____ ( key - value); не находит
                                              // называйте переменные по-разному

}
}

//  у стрелочной фкнеции не существует this

const person19 = {
    name18 : "John",
    age: 30,

    intro() {
        this.name18 = "John";
        let sayHi = () => { //стрелочная функция this  не имеет,берет его от родителя ( intro)
    
            return "Hello, my name is $(this.name18)"};
        
        return sayHi();

    }


    const person21 = {
    name20 : "John",
    age: 30,

    intro (coworkerName:string) {
        return "Hello $(coworkerName). I am $(this.name20)";
    }

    };
    console.log(person21.intro("Bob"));
