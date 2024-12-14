const sidebar = document.querySelector("#sidebar");
const butt = document.querySelector("#sugg").firstElementChild;
const closeNav = document.getElementById("close-navbar")
const form =  document.getElementById("myform")
const dataBase = []
let div = document.getElementById("for-errors")
butt.addEventListener("click",(e)=>{
    e.preventDefault()
    sidebar.style.display = "flex"
})
closeNav.addEventListener("click",(e)=>{
    e.preventDefault()
   
    sidebar.style.display = "none"
    sidebar.style.animation = "closenav 0.25s"
})


const myform = document.getElementById("myform")

const signIn = document.getElementById("signin")


function renderData(){
    const email = form.email.value;
    const pass = form.pass.value;
    const loggedIn = new Login(email,pass)
    
    const data = JSON.parse(localStorage.getItem("database"))
    const exists = data.findIndex(item => (item.email === email) && (item.pass === pass))
    if(exists == -1){
        div.innerHTML =`
        
        <p style = "color:#CAFF33">Email or password is incorrect</p>
        `
    }else{
        dataBase.push(loggedIn)
    }
    
    
}


class Login{
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
    }
}



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    renderData()
})


