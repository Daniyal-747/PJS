// // let grade = prompt("Enter Your Grade")
// // let per = prompt("Enter your Percentage")

// // // TURNARY OPERATION
// // // (?) question mark is used as IF condition here and (:) is used as Else condition here

// // let result = grade == "A" || grade == "B" || grade == "C" ? "Pass" : "Fail"
// // console.log(result);

// // Here we are checking it as a number (parseInt)
// // let grade = prompt("Enter Your Grade")
// // let per = parseInt(prompt("Enter your Percentage"))

// // let result =  per == 90 && grade == "A" || per == 80 && grade == "B" ? "PASS" : "FAIL";
// // console.log(result);


// // Here we re checking it as a String
// let grade = prompt("Enter Your Grade")
// let per = prompt("Enter your Percentage")

// let result =  per == "90" && grade == "A" || per == "80" && grade == "B" ? "PASS" : "FAIL";
// console.log(result);

// TRUNARY OPERATIONS (REPEAT)

let grade = prompt("Enter Yor Grade");
console.log(grade);
console.log(typeof(grade));

// ParseInt is used to change type of string into number as by default the type is in STRING
let per = parseInt(prompt("Enter Your per"))
console.log(typeof(per));
console.log(per)

// TURNARY OPERATIONS
// Turnary operation is used to check a single line condition

let result = grade === "A" && per === 90 || grade ==="B" && per === 80 || grade === "C" && per === 70 ? "PASS" : "FAIL"
console.log(result)