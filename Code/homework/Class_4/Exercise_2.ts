let val: string | number;
val = "hi";
val = 3;
// val = true; Error 
const operator: string = "*";
const a:number = 10;
const b:number = 5;
let result: number | string;

if (operator === "+") {
    result = a-b;    
}
else if (operator=== "-"){
    result = a-b;
}
else {
    result = "Choose a different operator";
}
console.log(result);