// Три компонента внутри круглых скобок разделяются **точкой с запятой**:

// 1. **Инициализация** — создание счётчика. Выполняется **один раз**, в самом начале.
//2. **Условие** — проверяется перед каждым проходом. Должно давать `true` или `false`. Пока `true` — цикл работает.
// 3. **Шаг** — изменение счётчика. Выполняется **после** каждого прохода тела.


// ```ts
//for (инициализация; условие; шаг) {
    // тело цикла
//}
for (let i: number = 0; i < 5; i++) {
    console.log ("Hello", i);
}
for (let z:number = 0; z < 4; z++) {
    console.log (z);

}

for (let y: number = 0; y < 2; y++){
    console.log ("*");

}

//ошибочное условие в цикле
for (let y: number = 0; y < 0; y++) {
    console.log ("*");

}

//длина строки без lenght
const str: string = "Hello World";
let count: number = 0;

for (let c:number  = 0; c < str.length; c++) {
    count = count+1;

    }
console.log (count);


// Подсчёт вхождений символа:**
// Здесь всплыл хороший вопрос с лекции: почему к строке применяется `str[i]`, ведь это синтаксис массива? 
// Ответ: строка и массив в JavaScript устроены похоже — у обоих есть `length` и обращение по индексу.
//  Объявлять строку массивом не нужно, `str[i]` работает и так.

const str1: string = "Hello World";

let count1: number = 0;

for (let c1: number = 0; c1 < str1.length; c1++) {
    if (str1[c1] === "l") 
    {count1++

    }
}
console.log(count1)


// Подсчет элементов массива и количества элементов

let arr10: number[] = [1, 2, 3, 4, 5];
let sum10: number = 0;
let sum11: number = 0;

for (let i: number = 0; i < arr10.length; i++) 
{
    sum10 = sum10 + arr10[i];
    sum11 = i+1;
}
console.log (sum10, sum11);




const numbers: number[] = [1, 2, 3, 4, 5];

for (let i: number = 0; i < numbers.length; i++) {
  //console.log(numbers[i]);
    
}
//поcчитать количество повторений символа "e" в строке "Hello, my name is Peter and I am a TypeScript student"

const string13: string  = "Hello, my name is Peter and I am a TypeScript student";
let x: number = 0;

for (let i: number = 0; i < string13.length; i++)
    { if (string13[i] ===  "e")
        x++;
        
    } 
console.log(x);

// Распечатать элементы двухмерного массива  в столбик
// [[1,2,3], [4,5,6], [3,2,1]]

const arr13: number [][] = [[1,2,3], [4,5,6], [3,2,1]];
const lane: string  = "";

for (let i:number = 0; i < arr13.length; i++ )
{


{
for (let j:number = 0; j < arr13[i].length;j++)

    console.log (arr13[i][j]);
}
console.log(lane); //  можно "\n"
}

// Распечатать элементы двухмерного массива  в строку - каждый элемент внешнего массива  - отдельная строчка

// [1,2,3],
// [4,5,6],
// [3,2,1]

const arr14: number [][] = [[1,2,3], [4,5,6], [3,2,1]];
const lane1: string  = "";


for (let i:number = 0; i < arr14.length; i++
   
)
{ let lane2: string = ""; 
    for (let j:number  = 0; j < arr14[i].length; j++)
    {
    lane2 = lane2 + " " + arr14 [i][j];
    }
   console.log(lane2); 

}