// 5 Subjects. User will enter the marks
// Prompt are Strings by defaults

//  parseInt is used to convert string into integer/number i.e. arseInt(prompt("Enter Anything"))

let user = prompt("Enter Your Name")
let maths = parseInt(prompt("Enter Your Maths Number"))
let english = parseInt(prompt("Enter Your english Number"))
let science = parseInt(prompt("Enter Your science Number"))
let chemistry = parseInt(prompt("Enter Your chemistry Number"))
let physics = parseInt(prompt("Enter Your physics Number"))

let obtainedMarks = maths + english + science + chemistry + physics

let per = obtainedMarks/500*100

// console.log(per);

// console.log(user);
// console.log(maths);
// console.log(english);
// console.log(science);
// console.log(chemistry);
// console.log(physics);

if(per>=90 && per<=100 ){
    console.log("Your Grade is A+")
}
else if(per>=80 && per<=90){
    console.log("Your Grade is A")
}
else if(per>=70 && per<=80){
    console.log("Your Grade is B");
}
else if(per>=60 && per<=70){
    console.log("Your Grade is C");
}
else if(per>=50 && per<=40){
    console.log("Your grade is D")
}
else{
    console.log("you are fail")
}
