let a, b, c;
a = 5;
b = 6;
c = a + b;

console.log(c);

let x, y, z;
x = 5;
y = 6;
z = x % y;

console.log(z);

//  muted - objects and arrays. it is a type of variable that can be changed. muted - let use kore hobe. //
//  immuted - primitives values(numbers, strings, booleans, null, undefined). it can't be changed. //
// immuted - always const use kore hobe let na. object and array teh const use kore hobe. //

// object-er bhitore kono function thaka ke method bole. //
// literals - {} //

let immutableString = "Hello";

immutableString = immutableString + " " + " World ";

console.log(immutableString);

const person = {
    fname: "Gulshan",
    lname: "Rahman",
    age: 00,
};

person.eyeColor = "black";
person.nickname = "Tanny";

console.log(person.fname);

delete person.age;
delete person["age"];

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

console.log(txt);

console.log(typeof person.fname);

const cars = {
    name: "volvo",
    weight: 100,
    color: "black",
};

let text = "";
for (let x in cars) {
    text += cars[x] + " ";
}

cars.nationality = "Bangladesh";

console.log(cars);

const cars = {
    name: "volvo",
    weight: 100,
    color: "black",
};

console.log(Object.values(cars));
console.log(JSON.stringify(cars));

// let text = "";
// for (let x in cars) {
//     text += cars[x] + " ";
// }

cars.nationality = "Bangladesh";

console.log(cars);

const myObj1 = {
    name: "john",
    age: 30,
    cars: {
        car1: "ford",
        car2: "bmw",
        car3: "fiat",
    },
};

console.log(myObj1 instanceof Object);

const myObj = {
    name: "john",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] },
    ],
};

for (let i in myObj.cars) {
    console.log(i);
}

console.dir(myObj);

let p1 = "cars";
let p2 = "car1";
let p3 = "car2";
let p4 = "car3";

console.log(myObj[p1][p2]);
console.log(myObj[p1][p3]);
console.log(myObj[p1][p4]);

console.log(myObj);
console.log(myObj.cars);
console.log(myObj.cars.car3);
console.log(myObj.cars["car1"]);
console.log(myObj["cars"]);
console.log(myObj["cars"]["car2"]);
console.log(Object.values(cars));

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName);

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    },
};

person.lang = "bn";

console.log(person);

const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person1.fullName());

const student = {
    firstName: "John",
    lastName: "Doe",
    id: 100,
    fullName: function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    },
};

console.log(student);

const student1 = {
    firstName: "John",
    lastName: "Doe",
    id: 100,
    get fullName() {
        return this.firstName + " " + this.lastName + " " + this.id;
    },
};

console.log(student1);

function Person(firstName, lastName) {
    // construction function

    this.firstName = first;
    this.lastName = last;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

const sumit = new Person("sumit", "saha", 35);

console.log(sumit.fullName());

const fruits = new Map();

fruits.set("bananas", 300);
fruits.set("apples", 500);
fruits.set("oranges", 200);

fruits.set("oranges", 800);
fruits.get("bananas", 300);
fruits instanceof Map;

console.log(fruits);

(function() {
    console.log("I am a");
})(); // self invoking function. invoking and calling same. // (); = IIFE - immediately invoked function expression.