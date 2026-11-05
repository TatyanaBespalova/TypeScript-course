// Object.keys - возвращает массив из всех ключей нашего объекта
const obj = {
    a:1,
    b:2,
    c:3
};
const arrKeys =Object.keys(obj);
console.log(arrKeys);
const arrPair =  Object.entries(obj);
console.log(arrPair);


// Object.values  - возвращает массив из значений объекта
// Object.entries  - возвращает массив из пар key - value  =  вложенный массив 


// опциональные параметры в объектах
// когда мы не знаем, существует ли такое свойство объета или нет, есть ли у него значения или нет,
//  мы можем его задать как опциональное 
const user17: {
    name: string;
    age: number; 
    occupation?:string 

} = 
{name : "John",
age: 20   
};
user17.occupation = "teacher"; // добавлять снаружи модно только тогда, когда в типизации ты обозначил его как опциональное
console.log(user17);

// опциональная цепочка
const user18: {
    personalInfo:{
        name:string,
        age:number;
        address:{
            address1:string;
            city:string;
            state:string;
        }
        homeAddress?: {
            address1:string;
            city:string;
            state:string;
        }
    };
    occupation:string
} = {
    personalInfo:{
        name:"Jim",
        age:20,
        address:{
            address1: "1 Main street",
            city: "Boston",
            state: "MA"
        }
    },
    occupation: "driver"
};
console.log(user18?.personalInfo?.name);
console.log(user18?.personalInfo?.address?.city);
console.log(user18?.personalInfo?.homeAddress?.state);

// добавить свойства в объекта
 const person19: {
    firstName:string;
    age:number;
    occupation:string;
    hobby? :string;
 } = {
    firstName : "john",
    age:30,
    occupation: "teacher"
 };
 console.log(person19);

 person19.hobby = "swimming";

 console.log(person19);
  
 delete person19.hobby // я могу удалить опциональное свойство
 console.log(person19);