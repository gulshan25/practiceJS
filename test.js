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

// let text = "";
// for (let x in cars) {
//     text += cars[x] + " ";
// }

cars.nationality = "Bangladesh";

console.log(cars);

const myObj = {
    name: "john",
    age: 30,
    cars: {
        car1: "ford",
        car2: "bmw",
        car3: "fiat",
    },
};

console.log(myObj);
console.log(myObj.cars);
console.log(myObj.cars.car3);