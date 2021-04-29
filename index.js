let quoteP = document.querySelector(".quote")
let sourceP = document.querySelector(".source")
let quoteButton = document.getElementById("showQuote")
let sourceButton = document.getElementById("showSource")

quoteButton.addEventListener('click', ()=>{
    if (quoteP.style.display == 'none'){
        quoteButton.innerText = "Hide quote"
        quoteP.style.display = 'block'
    } else{
        quoteButton.innerText = "Show quote"
        quoteP.style.display = 'none'
    }
})

const wait = (ms) =>{
    let start = Date.now(); //initialising start current time
    let now = start; //initialising now with start value
    while (now - start < ms){
        now = Date.now() //update now's value with the "new current time"
    }
}

sourceButton.addEventListener('click', ()=>{
    setTimeout(()=>{
        if (sourceP.style.display == 'none'){
            sourceButton.innerText = "Hide source"
            sourceP.style.display = 'block'
        } else{
            sourceButton.innerText = "Show source"
            sourceP.style.display = 'none'
        }
    }, 5000)
    
})

