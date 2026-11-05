//  если у нас есть функция, которая приимает объект как параметр
function getUser({firstName, lastName } :{firstName: string; lastName: string}) :string {
    return "Hello, my name is $(firstName) $(lastName).";
    console.log (getUser({firstName: "Bob", lastName: "Vila"}));

}

// создание интерфейсов. нам неважна марка машины, мы знаем, что машиша есть, и что у нее вот такие совйства
interface Car{
 brand:string;
 model:string;
 year:number;

}
const myCar:Car =
{ brand:"Ferrari",
  model:"F50",
  year: 1997

};
console.log(myCar);


interface Car1{
 brand:string;
 model?:string;
 
}
const myCar1:Car1 =
{ brand:"Ferrari",
  
};
myCar1.model = "F50"
console.log(myCar1);


// интрефейсы могут иметь методы
interface Car2{
 brand:string;
 model:string;
 year:number;
 getCar2Description (name:string): string;
 getCar2Age():string;
}
const myCar2: Car2 = {
    brand: "Ferrari",
    model: "F50",
    year: 1997,
    getCar2Description (name:string):string {
        return 'Hello ${name}.This is a ${this.brand} ${this.model}.'
    },
    getCar2Age(): string {
        return' This is ${this.brand}.'
    },
}
//  если в интерфейсе есит методы, и метод принимает параметры, то название параметра можно менять
// без примера

// мы можем сдеать так, чтобы одно из свойство объекта нельзя было менять - read only
interface Car4{
    readonly vin:string;
    mileage :number;

}
const myCar4: Car4 = {
    vin: "123434",
    mileage: 15000
};
// после этого свойства объекта изменить невозможно - эта возможность typescript only 
// myCar4.vin = "00000"// выдаст ошибку
// если одно из свойств объекта  - массив, то даже при использовании readonly , мы сможем изменить массив путем добавления в него нового объекта через push :
// 
// user.emails.push ("x@x.com") - добавляем в массив user.emails новый элемент

interface Vehicle { readonly emails: string[] }
const v5: Vehicle = { emails: ["a@a"] };

//v.emails = ["x"];
// error TS2540: Cannot assign to 'emails' because it is a read-only property.

v5.emails.push("b@b"); // компилируется!
console.log(v.emails); // [ 'a@a', 'b@b' ]

//решение по закрытию лазейки
interface Vehicle { readonly emails1: readonly string[] }
const v5: Vehicle = { emails1: [] };

v.emails.push("x");
// error TS2339: Property 'push' does not exist on type 'readonly string[]


//  к интерфейсу возможно добавлять свойства = переоткрыть интерфейс
interface User { name: string; email: string }
interface User { age: number }   // добавили свойство «снаружи»
//const  u: User = { name: "A", email: "a@a" };
// error TS2741: Property 'age' is missing in type '{ name: string; email: string; }' but required in type 'User'.

// Теперь `User` требует все три свойства. Если во втором объявлении сделать `age?: number`, его можно не указывать.
// Type Aliases  = Custom types
type User1 = {
    name:string;
    age:number;
    email: string;
};
//создаем объект этого типа
let user: User1 = 
{
    name: "john",
    age: 30,
    email: "x@x.com"
};
console.log(user);
let user1: User1 = 
{
    name: "Kate",
    age: 35,
    email: "k@x.com"
};

let user3: User1 = 
{
    name: "Yetti",
    age: 1000,
    email: "y@x.com"
};

// для нескольких пользователей мы можем создать функцию, чтобы не повторять одни и теде же записи
function createUser(user: User): User{
    return {
        name: user.name,
        age: user.age,
        email:user.email
    };
}
let user4: User = createUser({
    name: "user1",
    age:30,
    email: "user@user.com"

    }
);

let user5: User = createUser({
    name: "user5",
    age:30,
    email: "user5@user.com"

    }
);
// Добавление свойтсва в Custom Type
// type New  = type A & type;             // intersection: все свойства обоих типов
// type Новый = ТипА & { ключ: тип };    // добавить свойство к существующему типу
// type Новый = ТипА | ТипБ;             // union: либо один тип, либо другой (или оба)

type User5 = {
     name: string;
     age:number;
     email?: string;
};
type VipUser = User5 &{
    label: string};

    let user7: VipUser=
    {
        name: "John",
        age: 30,
        email: "x@x.com",
        label: "VIP"
    };
    console.log(user5);
      
    // можно соединить два отдельных типа
    type User6 = {
     name: string;
     age:number;
     email?: string;
};
    type Occupation = {
        title:string;
    };
    
    type Bio = User6 & Occupation; //(and), для случая с or  <User|Occupation  -один из >- используется для API . этот метод называется юнион
    let user8: Bio = {
        name: "John",
        age:30,
        title: "teacher"
    };


    // когла использовать интерфейсы, а когда - типыю
    //  интерфейсы лучше использовать тогда, когда нужно что-то добавлять
    // типы хорошо работают с union (or) and intersection (and) 