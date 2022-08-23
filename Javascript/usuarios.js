class User{

    constructor(username, email, password){
    
        this.username = username
        this.email = email
        this.password = password

    }
}

const idForm = document.getElementById("idForm")

const users = []


idForm.addEventListener("submit", (e) => {
e.preventDefault()

const username = document.getElementById("username").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

const user = new User(username, email, password)

users.push(user)
idForm.reset()
console.log(user)

})

