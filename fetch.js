const url='https://randomuser.me/api/?results=10&nat=au'
//const url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

// $.ajax({
//     url: url,
//     dataType: 'json',
//     //success: (response) => {printUsers(response.results)},
//     success: (response) => {console.log(response)},
//     error: (e) => {console.log(e)}
//   });
      
fetch('https://randomuser.me/api/?results=10&nat=au')
    .then(response => response.json())//returns a promise
    .then(data => {printUsers(data.results)})
    .catch(e => {console.log(e)})

// async function getData(){
//     let response = await fetch('https://randomuser.me/api/?results=10&nat=au')
//     let data = await response.json()
//     printUsers(data.results)
// }

// getData()
const usersContainer = document.querySelector("#users")

function createUser(user){
    let userDiv = document.createElement("div")
    let userName = document.createElement("h4")
    userName.innerText = user.name.first + " "+ user.name.last
    userDiv.appendChild(userName)
    let userEmail = document.createElement("p")
    userEmail.innerText = user.email
    userDiv.appendChild(userEmail)
    usersContainer.appendChild(userDiv)
}

function printUsers(users){
    console.log(users)
    for (user of users){
        console.log(user.name.first+" "+user.name.last)
        createUser(user)
    }   
}