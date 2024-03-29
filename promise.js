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

// Fourth Promise

let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name: "CAMEL" , password: "54321"})
        }else{
            reject("Error : Something went wrong")
        }
    },4000)
})
promiseFour
.then(function(userData){
    return userData.name
})
.then(function(myData){
    console.log(myData);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Finally");
})

// Promise Five

let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({car: "VW" , colour : "White"})
        }else{
            reject("ERROR : THIS CAR IS NO LONGEREXIST IN STOCK")
        }
    },2000)
})

async function consumedPromiseFive(){
    try{
        let response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumedPromiseFive()
