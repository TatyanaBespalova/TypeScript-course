//try, catch, finally - это она конструкция, между ними нельзя помещать другой код

//Дана строка:

//const text: string = "Hello";

// Попробуй повторить её -2 раза методом repeat().

// Syntax:
// try { code that might contain an error}
//catch (error)
//      {code to be executed in case of an error}
// finally {code to be executed anyway}


// if (condition)
// {
// throw " Error message"
// }


// try {

//  if (),// throw 
//  }
// catch {}
// finally {}





const text: string = "Hello";
let i:number  = 3;
try
{
console.log(text.repeat(i))
}

catch (error) 
{
    console.log (`Error ${error}, number can not be negative`);
}


finally 
{console.log("The end")

}



const text1: string = "Hello";
let i1:number  = 3;
try
{if (i1 <= 0)
     {throw ("Number cant be negative")
     }
else  {console.log(text1.repeat(i1))
     }
    }
catch (error)
     {console.log (`Error ${error}, number can not be negative`);} // catch не может быть внутри if
     
    
finally 
{console.log("The end")

}
     
 {console.log(text1.repeat(i))
} 
  


