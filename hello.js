// // PROMISE

// setInterval(function(){
//     document.write("wow!")
// },2000)

// setTimeout(function(){
//     console.log("Hello World");
// },2000)

// PROMISE

// First Promise
let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This is a promise");
    },2000)
})


// Second Promise
let promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "Henry" , email: "Henry@gmail.com"})
    },2000)
})

// Then is necessary to include in resolve
promiseTwo.then(function(user){
    console.log(user);
})

// Third Promise
let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Mike" , password: "12345"})
    },4000)
})

promiseThree.then(function(myUser){
    return myUser.password;
})
.then(function(abc){
    console.log(abc);
})
