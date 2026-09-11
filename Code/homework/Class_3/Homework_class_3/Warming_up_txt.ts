let newArray1:number[] = [1, 2, 3, 4];
let newArray2:boolean[] = [true, false,false];
let newArray3:string[] = ["This", "is", "a", "new","array"];
let newArray4:number[][] = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [5, 3, 1, 4, 2],
    ];
// напечатать элемент массива
console.log(newArray3[4]);
//напечатать тип элемента массива
console.log(typeof(newArray1[0]));
// напечатать тип элемента вложенного массива
console.log(typeof(newArray4[1][1]));
//преобразование массива в строку. разделяется только запятыми
newArray1.toString();
console.log(newArray1.toString());
console.log(typeof(newArray1.toString()));
// соединение элементов массива и возврат в строку. 
// Еcли разделитель не передан, то по умолчанию  - запятая.
//  Разделитель лучше писать внятно, даже если это запятая.
console.log(newArray2.join("+"));
console.log(newArray3.join("@"));
console.log(newArray4.join("\n"));// "/n" - перенос на новую строку
// преобразование строки в массив
// split() — строковый метод. 
// Он разбивает строку по указанному разделителю и возвращает массив строк.
//Алгоритм был объяснён так:
//Алгоритм был объяснён так:

//Метод идёт по строке слева направо.

//Находит указанный разделитель — в примере пробел.

//Текст до разделителя становится элементом массива.

//Сам разделитель в результат не попадает.

//Поиск продолжается после разделителя

const textExample = "Hello world";
console.log(textExample.split(" "));

// Пустая строка как разделитель разбивает текст на символы
const textExample1:string  = "Hello";
console.log(textExample1.split(""));

textExample1.split(" "); // массив слов, если слова разделены одиночными пробелами
textExample1.split("");  // массив отдельных символов
//textExample1.split();    // массив из одного элемента — всей исходной строки

// разбить строку на отдельные символы, но не сохранять пробелы
//  методы .replaceAll, split()
//  разбить строку на отдельные символы, но не сохранять пробелы.
const textExample2:string  = "I love cats they are wonderful animals";
console.log(textExample2.replaceAll(" ","*").split(" "));
//Пребразования строкового числа в число  ( "1" => 1), используем Number()
const value1: string = "1";
const numericValue: number  = Number(value1);
console.log(typeof(numericValue));
//значение из массива
const oldArray: string[] = ["1", "2", "3"];
const element1: number  = Number (oldArray[0]);
console.log(element1);
console.log(typeof(element1));
// parseInt  -   аналогично,но есть отличияб  изучить дома
//  Создание нового массива и добавление элементов push() - добавляет элемент в конец массива 
let newArray5: number[] = [1,2,3,4,5]; 
newArray5.push(10);
console.log(newArray5[5]);
//  преобразование строки по одной, после этого добавление числе в новый массив
let oldArray6:string[] = ["1", "2", "3", "4", "5"];
let newArray6:number[] = [];//   создание реального пустого массива
let element6:number = Number(oldArray6[0]);
newArray6.push(element6);
let element7:number = Number(oldArray6[1]);
newArray6.push(element7);
console.log(newArray6);
console.log(typeof(newArray6[1]));
// Суммирование элементов массива по индексам.  
//  Вручную, или используя Math.sumPrecise 
const newArray7:number[] = [1, 2, 3];
const sum:number = newArray7[0] + newArray7[1] + newArray7[2];
console.log(sum);
const element8: string[] = ["1", "2", "3"];
const n1: number = Number(element8[0]);
const n2: number = Number(element8[1]);
const n3: number = Number(element8[2]);
const sum1:number = n1 + n2 + n3;
console.log (sum1);

