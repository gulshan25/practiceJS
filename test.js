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

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

console.log(txt);

const car = {
    name: "volvo",
    weight: 100,
    color: "black",
};

let text = "";
for (let x in car) {
    text += car[x] + " ";
}

console.log(text);