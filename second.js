let myData = {
    name: "Peter",
    city: "Karachi",
    age: 20,
    salary: "1000",
    grade: "C"
};

// Two Methods of getting data from an object

// First Method
console.log(myData["name"]);
console.log(myData["city"]);

// Second Method
console.log(myData.salary);
console.log(myData.grade);
console.log(myData)         //This will bring all data in a single line

// Getting data with using loop

for(let i in myData){
    console.log(i, myData[i]);
}


//ARITHMETIC OPERATORS

let a = 45;
let b= 75;

console.log("The sum of a+b is", a+b)
console.log("The sum of a-b is", a-b)
console.log("The sum of a*b is", a*b)
console.log("The sum of a/b is", a/b)
console.log("The sum of a%b is", a%b)       //Modulus


// LOGICAL OPERATORS
// Three types of Operators (End (&&), Or(||), Not(!) )

// END (&&) (Both needs to be true)
console.log("End Operator") 
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// OR (||) (One needs to be true)
console.log("OR Operator")
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Not (!) (Or operator changes the value of true to false & false to true)
console.log("NOT Operator")
console.log(!true && true);
console.log(true && false);
console.log(false ||true);
console.log(!false || false);


// COMPARIASON

// > Greater Than
// < Less Than
// >= Greter than equals to
// <= Less tha equals to

// == "it means equals to the other value"
// === "It shows value is equal along with the type"