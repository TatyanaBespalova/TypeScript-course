let textString: string = "letter";
console.log(textString);
let numberString: string = "1234";
console.log(numberString);
let booleanString: string = "true";
console.log(booleanString);
let characterString: string = "!@&";
// sign / before any special symbol turns it into a string symbol. If there are multiples, the \ is meant to be placed before each of them
let specialString: string = "Special symbol\"";
console.log(specialString);
//   \n - placed the cursor at the beginning of new line
let S1: string = "This is my first line \n This is my second line";
console.log(S1);
// \t - placed the cursor at the beginning of new line with a tab space
let S2: string = "This is my first line \t This is my second line"; 
console.log(S2);
// we can copy one string into another string 
let str1:string = "Hello";
let str2:string = str1;
console.log(str2);
console.log(str1);
let str3:string = "World";
console.log ( str1 + " " + str3); // concatenation of two strings, using + operator
console.log (str1, str3); // concatenation of two strings, using , operator. A space is added by default after ","
const str4:string = "John";
const str5:string = "Smith";
let str6:string = "Hello, my name is " + str4 + " " + str5;
let str7:string = `Hello, my name is ${str4} ${str5} ${5+10}`;//  только боковые кавычки,знак доллара и фигурные скобки
console.log(str6);
console.log(str7);

// Methods ( написанный код)
// отвечает за опреденную функциональность, вызывается через точку. 
// После названия метода ставятся круглые скобки
// Методы, связанные со строкой, могут быть вызваны только на строках.
// .lenght - исключение
str4.length;
console.log(str4.length);
"".length
console.log(str6.toUpperCase());
console.log(str6.toLowerCase());
// .trim  - убирает пробелы в начале и в конце строки
console.log(str6.trim());
console.log(str6[2]); // выводит третий символ строки, так как индексация начинается с нуля
// index, который не существует  - undefined
console.log(str6[100]); // undefined
//charAt() - выводит символ по индексу, если индекс не существует - пустая строка
console.log(str6.charAt(2));
console.log(str6.charAt(100)); // пустая строка
///.substring() - метод извлечения сабстроки
console.log(str6.substring(1,4));
console.log(str6.substring(1));
console.log(str6.slice(-1)); // выводит последний символ строки

// slice vs substring
// slice() - принимает отрицательные индексы, substring() - нет
console.log(str6.slice(-5));
console.log(str6.substring(-5)); // выводит всю строку, так как отрицательные индексы не поддерживаются

//charAt() vs [] - charAt() возвращает пустую строку, если индекс не существует, [] - undefined
//.indexOf() - возвращает индекс первого вхождения подстроки, если подстрока не найдена - возвращает -1
console.log(str6.indexOf("my"));
//.replace() - заменяет первое вхождение подстроки на другую подстроку
console.log(str6.replace("my", "your"));
//.replaceAll() - заменяет все вхождения подстроки на другую подстроку
console.log(str6.replaceAll("my", "your"));

//Общие методы;
//isNaN(123); // false
//isNaN("123"); // false
//isNaN("abc"); // true
//isNaN(true); // false
//isNaN(false); // false
//isNaN(undefined); // true
//isNaN(null); // false
isNaN(NaN); // true

//parseInt() - перевод строки в число
console.log(parseInt(numberString)); // 1234
//parseFloat() - перевод строки в число с плавающей точкой (можно использовать одну десятичную точку  )
let float:string = "3.14234";
console.log(parseFloat(float)); // 3.14234
let float1: string = "Hello";
console.log(parseFloat(float1)); // NaN
let float2 = "3.14abc";
console.log(parseFloat(float2)); // 3.14
let float3: string = "1.2.3";
console.log(parseFloat(float3)); // 1.2
//  Математические методы
// Math.round() - округляет число до ближайшего целого
console.log(Math.round(3.5)); // 4
// Math.floor() - округляет число вниз до ближайшего целого
console.log(Math.floor(3.9));   
//Math.abs() - возвращает абсолютное значение числа
console.log(Math.abs(-5)); // 5
// Math.ceil() - округляет число вверх до ближайшего целого
console.log(Math.ceil(3.1));// 4
// Math.random() - возвращает случайное число от 0 до 1
console.log(Math.random());
// -- Самые большие и наименьшие числа
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// тип данных:any
//Отключает проверку типов, может быть любым типом данных. Используется, когда тип данных неизвестен или может изменяться.
let result;
console.log ( typeof result); // undefined

//  Масивы. Нужнфы для объединения связанных друг с другом переменных. Сохряняем их в одну переменную = массив.

const arr: any[] = [];
const colors: string[] = ["red", "green", "blue"];
console.log(colors);
const arr1: string[] = new Array();
const colors1: string[] = new Array("red", "green", "blue");
console.log(colors1);
//  внутри массива могут быть переменные, а не только значения
const color1: string = "red";
const color2: string = "green";
const color3: string = "blue";
const colors2: string[] = [color1, color2, color3];
console.log(colors2);

const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);
const nums1: number[] = new Array(1, 2, 3, 4, 5);
console.log(nums1);
const bool: boolean[] = [true, false, true];
console.log(bool);
const bool1: boolean[] = new Array(true, false, true);
console.log(bool1);
console.log(typeof (bool1));


