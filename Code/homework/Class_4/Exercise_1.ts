try              {
    let text = "Hello World!";
    let i = 3;

    console.log(text.repeat(i));

}
catch {
    console.log("An error occured");
}
finally{
    console.log("That is all!");
}





try              {
    let text = "Hello World!";
    let i = -3;

    console.log(text.repeat(i));

}
catch {
    console.log("An error occured");
}
finally{
    console.log("That is all!");
}


try {
 let age: number = 18;

 if (age < 21) {
    throw "Too young!";
}
console.log ("Hello, I am $(age) years old"); 
}

catch (err){
    console.log("An error occured: $(err)");

}
