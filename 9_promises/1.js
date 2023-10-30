// const promiseone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)
// })

// promiseone.then(function(){
//     console.log("promise consumed")
// })


// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;

//         if(!error){
//             resolve({username:"harsh sahu",password:"123456"})
//         }
//         else{
//             reject()
//         }
//     },1000)
// })

// promiseFour.then((user)=> {
//     console.log(user)
//     return user.username
// }).then((username)=> {
//     console.log(username)
// }).catch(function(){
//     console.log('error')
// })

// const promiseFive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =false;
//         if(!error){
//             resolve({username:"harsh sahu",password:"123456"})
//         }
//         else{
//             reject("something went wrong")
//         }
//     })
// })

// async function consumepromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// consumepromiseFive()



async function getAllUsers(){
    try{
        const response= await  fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        const data = await  response.json()
        console.log(data)
    }
    catch(error){
        console.log("E:", error)
    }
}

getAllUsers()