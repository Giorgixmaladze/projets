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
