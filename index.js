let quoteP = document.querySelector(".quote")
let sourceP = document.querySelector(".source")
let quoteButton = document.getElementById("showQuote")
let sourceButton = document.getElementById("showSource")

quoteButton.addEventListener('click', (e)=>{
    //e.preventDefault()
    if (quoteP.style.display == 'none'){
        quoteButton.innerText = "Hide quote"
        quoteP.style.display = 'block'
    } else{
        quoteButton.innerText = "Show quote"
        quoteP.style.display = 'none'
    }
})

const toggleSource = (e)=>{
    //e.preventDefault()
    if (sourceP.style.display == 'none'){
        sourceButton.innerText = "Hide source"
        sourceP.style.display = 'block'
    } else{
        sourceButton.innerText = "Show source"
        sourceP.style.display = 'none'
    }
}

sourceButton.addEventListener('click', ()=>{
    setTimeout((toggleSource), 3000)
})
