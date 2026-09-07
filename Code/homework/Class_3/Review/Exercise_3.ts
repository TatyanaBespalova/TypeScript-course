let newArray: string[] = ["1", "2", "3", "4", "5"];
let newArray2: number[] = [];
   
//  как вызвать первый элемент массива newArray?
//console.log(typeof(newArray[0]));
let el1: number =Number(newArray[0]);
//console.log(el1, typeof(el1));
newArray2.push(el1);
// console.log(newArray2);
 
let el2: number = Number(newArray[1]);
newArray2.push(el2);
console.log(newArray2);

let el3: number = Number(newArray[2]);
newArray2.push(el3);
console.log(newArray2);

let sum: number = newArray2[0] + newArray2[1] + newArray2[2];
console.log(sum);




