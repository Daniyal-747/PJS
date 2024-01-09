console.log("Hello World");

// DATA TYPES

name = "Daniyal";           //String
age = 20;                   // Integer , Number
isCnic = true;              // boolean (True & False)
x = undefined;              // Something will be added here 
y = null;                   // Empty (Nothing is defined to be added here)

console.table(name, age, isCnic, x, y)
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isCnic));
console.log(typeof(x));
console.log(typeof(y));

// TWO TYPES OF DATA TYPES

// PRIMITIVE    String, Int, number, boolean etc
// NON PRIMITIVE    Array, Functions, Objects etc


// THREE TYPES OF DECELARATION

// var (can be redeclared and updated)
// let (can't be redeclared, but it can be updated)
// const (can't be redeclared and can't be updated)

var city = "Karachi"
console.log(city);
city = "Lahore"
console.log(city);
var city = "Peshawar"       
console.log(city);

let Myage = 15;
console.log(Myage);
Myage = 80;
console.log(Myage);         //Can be updated
// let Myage = 20;         //Can't be redeclared

const pie = 3.14;
console.log(pie);
pie = 40;                  //can't be redeclared and can't be updated
