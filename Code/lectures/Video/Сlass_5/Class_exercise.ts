// функция  - тип данных в Typescript
//написан отдельно
//повторяется многократно

// function Functionname() : тип Х {
// тело функции
//return  - результат
// }

function Greeting(): string 
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
 
function Sum(): number {
 const a: number = 5;
 const b: number  =  10;
return a + b

}
console.log (Sum());

function Sum1 (a: number, b: number): number {
    return a + b;
}
console.log(Sum1(5,10));
console.log(Sum1(1,2));

// Опциональный, или необязательный аргумент
function Sum2: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a + 10;
}
console.log(Sum2(5));

//  мы можем создать переменную,значение которой будет результат, возвращаемый функцией
let sum3 :number   = Sum (1,2);
console.log(sum3);

function Outer():string {
    function Inner(): number {
        return 5;
    }
    return "hello-" + Inner();
}
console.log (Outer());