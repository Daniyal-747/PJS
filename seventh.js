// let grade = prompt("Enter Your Grade")
// let per = prompt("Enter your Percentage")

// // TURNARY OPERATION
// // (?) question mark is used as IF condition here and (:) is used as Else condition here

// let result = grade == "A" || grade == "B" || grade == "C" ? "Pass" : "Fail"
// console.log(result);

// Here we are checking it as a number (parseInt)
// let grade = prompt("Enter Your Grade")
// let per = parseInt(prompt("Enter your Percentage"))

// let result =  per == 90 && grade == "A" || per == 80 && grade == "B" ? "PASS" : "FAIL";
// console.log(result);


// Here we re checking it as a String
let grade = prompt("Enter Your Grade")
let per = prompt("Enter your Percentage")

let result =  per == "90" && grade == "A" || per == "80" && grade == "B" ? "PASS" : "FAIL";
console.log(result);