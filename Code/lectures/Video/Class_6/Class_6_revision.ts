const persData = {
    name: "Jane",
    surname : "Fox", 
};
console.log(persData);
console.log(persData.name);

const user = {
    id:1,
    personalInfo : {
        name: "Alica",
        age :30,
        address :{city: "Tbilisi", street : "Rustaveli"},
    },
};

console.log(user.personalInfo.address.city)

// проверка наличия свойства = "key" in object 
const user1 = {name:"John", age:30};
console.log("age" in user1);
console.log("occupation" in user1);

const p = {
    name: "Jim",
    greet1:function(){return "Hi from function";},
    greet2: function() {return "Hi from fucntion1; "},
    greet3: function (){return "hi from function2"},

};

console.log (p.greet1());
console.log (p.greet2());
console.log(p.greet3());
console.log(typeof p.greet3());
console.log(typeof p.greet3);

const user3 = {
    id:1,
    personalInfo : {
        name: "Alica",
        age :30,
        address :{city: "Tbilisi", street : "Rustaveli"},
    },
    greetings() {
        return ` Hello everyone, ny name is ${this.personalInfo.name} and I am from ${this.personalInfo.address.city}`;
    },
};
console.log (user3.greetings());



