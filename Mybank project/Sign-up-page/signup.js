

const sidebar = document.querySelector("#sidebar");
const butt = document.querySelector("#sugg").firstElementChild;
const closeNav = document.getElementById("close-navbar")
const form =  document.getElementById("myform")

butt.addEventListener("click",(e)=>{
    e.preventDefault()
    sidebar.style.display = "flex"
})
closeNav.addEventListener("click",(e)=>{
    e.preventDefault()
   
    sidebar.style.display = "none"
    sidebar.style.animation = "closenav 0.25s"
})

const dataBase = []
function datarender(){
    const firstName = form.elements.firstname.value
    
    const lastName = form.elements.lastname.value
    
    const email = form.elements.email.value
    
    const pass = form.elements.pass.value

    const data = new Data(firstName,lastName,email,pass)
    const users = localStorage.setItem("users",JSON.stringify(data))
    const exists = dataBase.findIndex(item => item.email === email)

    if(exists == -1){
        dataBase.push(JSON.parse(localStorage.getItem("users")))
        document.getElementById("for-errors").innerHTML = `
            <p style = "color:#CAFF33">Account registered succesfully</p>
        `
    }else{
        document.getElementById("for-errors").innerHTML = `
        <p style = "color:#CAFF33">Account with this email is already exists</p>
        `
    }


    
    localStorage.setItem("database",JSON.stringify(dataBase))
    
    
    

    resetItems(firstName,lastName,email,pass)
     
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
    javascript:window.location='../Sign-in-page/index.html'
})



