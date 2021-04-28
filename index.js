let alertButton = document.querySelector("#showAlert")

alertButton.addEventListener('click', ()=>{
    setTimeout(()=>alert("ALERT!!"), 5000)
})