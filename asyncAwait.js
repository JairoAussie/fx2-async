async function capitalise (word){
    if (typeof word !== 'string'){
        throw "String required"
    }else{
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }            
}
//await is a keyword that ALWAYS is used in an async function

//capitalise("managing async JS").then(data => {console.log(data)})

async function showNumbers(){
    console.log(1)
    await setTimeout(()=>{
        console.log(2)
    },2000)
    console.log(3)
}

showNumbers()