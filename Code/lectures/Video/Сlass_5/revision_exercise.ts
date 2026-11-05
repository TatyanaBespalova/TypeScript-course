
function Greeting() : string {
    return "Hello World ";
}
console.log(Greeting());

Greeting();

console.log(Greeting());

function Print(): string {
    return "\n Results of the calculations: -----------";// завершает функцию, второй return  не выполняется
    return "-----------------------";
};
const a : number = 5
const b: number  = 6

console.log(Print());
console.log (a+b);

function Print1() : void { 
    console.log ("This is a void function. It does not return anything.")
};

Print1();

console.log(typeof(Print1()));


//function throwError(): never {
  //throw "error";
//}

// throwError();

//Куда «выбрасывает»? Ошибка передаётся из функции в код, который её вызвал. 
// Если там нет специального обработчика try...catch, ошибка передаётся дальше. 
// Если её никто не обработал, среда запуска показывает сообщение об ошибке.
//
//
function Sum1():number {
    const a: number = 5;
    const b: number = 10;
    return a + b;
}
console.log(Sum1());


// Параметры функции и аргументы при вызове
function Sum2(c: number,b:number): number {
    return c-b;
}
console.log(Sum2(10,3));
console.log(Sum2(3,10));

function Sum3( x: number, y?:number) : number {
    if (y){
        return x+ y
    }
    return x;
}
console.log(Sum3(5));

const s: number  = Sum2 (10,3);
console.log(s);
console.log(Sum2(10,3));

function Outer():string{
    return "hello";
};

function Outer1(): string {
    function Inner(): number{
        return 5;
    }
    return "hello - " + Inner ();
};
console.log(Outer1());