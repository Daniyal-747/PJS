let promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("This is a promise");
    },2000)
})

let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve("This is promise 2")
    },2000)
})

promiseTwo.then(function(user){
    console.log(user);
})

let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name: "Daniyal" , email: "Daniyal@gmail.com"})
    },4000)
})
promiseThree.then(function(myText){
    // console.log(myText);
    return myText.email;            //Return is used to get the simgle value from the object
}).then(function(userValue){
    console.log(userValue);
})


// REJECT Condition

let promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name: "Hamza" , email: "Hamza@gmail.com"})
        }
        else{
            reject("ERROR : WRONG")
        }
    },6000)
})

promiseFour.then(function(apple){
    return apple.email
}).then(function(mango){
    console.log(mango);
}).catch(function(error){                   //Catch is used for reject & return is used for resolve
    console.log(error);
})
.finally(function(){
    console.log("The promise has been resolved or rejected");
})

