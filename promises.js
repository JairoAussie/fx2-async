// const firstPromise = Promise.resolve("my first Promise")
// const badPromise = Promise.reject("Bad promise buuuuuu")

// firstPromise
//     .then((data)=>{console.log(data.toUpperCase())})
//     .catch((error)=> {console.error(error)})
// badPromise
//     .then((data)=>{console.log(data.toUpperCase())})
//     .catch((error)=> {console.error(error)})
function capitalise (word){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (typeof word !== 'string'){
                reject(new Error("String required"))
            }else{
                resolve(word[0].toUpperCase() + word.slice(1).toLowerCase())
            }            
        },1000)
       
    })
}
//add to the string "..." only if the string length is >4, otherwise throws an error
function checkLength(string){
    if (string.length > 4){
        console.log(string+"...")
    }else{
        throw new Error("Too short string")
    }
}

capitalise("hi everyone")
    .then(checkLength)
    .catch(e => {console.log(e.message)})
