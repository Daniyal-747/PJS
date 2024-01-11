let age = 10;

if(age>=20){
    console.log("You can cast your vote");
}if(age<=20){
    console.log("You can't cast your vote")
}

if(age>=20){
    console.log("You can cast your vote");
}else{
    console.log("You can't cast your vote");
}

let mode = prompt(`Enter Your Mode
1) DARK
2) LIGHT`)
let color;

if(mode === "DARK"){
    color = "Black"
}if(mode === "LIGHT"){
    color= "White";
}

console.log("You chose the color", color);