const sidebar = document.querySelector("#sidebar");
const butt = document.querySelector("#sugg").firstElementChild;
const closeNav = document.getElementById("close-navbar")
const form =  document.getElementById("myform")
const dataBase = []
butt.addEventListener("click",(e)=>{
    e.preventDefault()
    sidebar.style.display = "flex"
})
closeNav.addEventListener("click",(e)=>{
    e.preventDefault()
   
    sidebar.style.display = "none"
    sidebar.style.animation = "closenav 0.25s"
})

function datarender(){
    const firstName = form.elements.firstname.value
    
    const lastName = form.elements.lastname.value
    
    const email = form.elements.email.value
    
    const pass = form.elements.pass.value

    const data = new Data(firstName,lastName,email,pass)
    const users = localStorage.setItem("users",JSON.stringify(data))
    dataBase.push(localStorage.getItem("users"))
    localStorage.setItem("database",dataBase)
    console.log(localStorage.getItem("dataBase"))
    

    resetItems(firstName,lastName,email,pass)
    console.log(document.querySelector("#signup"))
    
}

class Data{
    constructor(firstName,lastName,email,pass){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.pass = pass
    }
    

    
}

function resetItems(){
    form.elements.firstname.value = ""
    form.elements.lastname.value =""
    form.elements.email.value = ""
    form.elements.pass.value =""
}

    
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    datarender()
    
})

