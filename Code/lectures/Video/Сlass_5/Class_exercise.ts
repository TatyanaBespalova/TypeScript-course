// функция  - тип данных в Typescript
//написан отдельно
//повторяется многократно

// function Functionname() : тип Х {
// тело функции
//return  - результат
// }

function Greeting(): string // function declaration 
{return "Hello World returned";

}
Greeting();
console.log(Greeting());

function Print() {
    console.log ("\n Result of calculations: ");
    console.log("-----");
}

const a:number  = 5;
const b:number = 10; 

Print();
console.log(a+b);

Print();
console.log(a-b);

Print();
console.log(a*b);
//  правильно указать тип данных void для функции Print, так как она ничего не возвращает
// void  - тип данных, undefined
function Print1(): void{
    console.log("Hello World printed")
}

// never -тип данных ошибка
//function throwError() :never {
    //throw "error";
    // no code after the throw statement is reachable!
//}
//console.log(typeof throwError());
 
function Sum9(): number {
 const a: number = 5;
 const b: number  =  10;
return a + b

}
console.log (Sum9());

function Sum1 (a: number, b: number): number {
    return a + b;
}
console.log(Sum1(5,10));
console.log(Sum1(1,2));

    // необязательный аргумент
    function Sum(a:number, b: number = 10):number{
        if (b) {
            return a+b;
        }
        return a;
    }
    console.log(Sum(5));


function Outer():string {
    function Inner(): number {
        return 5;
    }
    return "hello-" + Inner();
}
console.log (Outer());

//ф имеет доступ к внешним параметрамя

 const c: number = 100;
 function Sum10(a:number, b:number): number {
return a + b + c;
 }
 console.log(Sum10(1,3));

 const sum: number = Sum10(1,2);// function expression, переменной присваивается значение резульатата . наверх не поднимается
 console.log(sum);

 // рекурсивная функция -функция, которая вызывает сама себя
 function SquareIt(num:number) : number | undefined {
    if (num > 65536)
    {return// выйди из моей функции

    }
    console.log(num);
    const square = num * num;
    return SquareIt(square);
 }
 SquareIt(2);

 // function hoisting   - подъем функции наверъ кода 

 // =  сначала создаем фунццию, а потом ее вызываем

// анонимная функция  - когда не обращаемя к функции напряму.
const sum12 = function (a: number, B: number) : number {
    return a + b;

};
console .log(sum12(1,2));
  
 
// arrow function =  стрелочная функиця // => заменяет "function" 
const sum13 =  (a: number, B: number) : number  => {
    return a + b;

};
console .log(sum12(1,2));

 // arrow function позволяют компактно выполнять функции, где вернуть нужно одну строку
 const sum14 = (a: number, b: number):number => a + b;
console.log(sum14(1,2));

const myf = (): string => ""
 {
    // arrow function};
    return "";

 };
 