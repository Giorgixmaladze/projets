const sidebar = document.querySelector("#sidebar");
const butt = document.querySelector("#sugg").firstElementChild;
const closeNav = document.getElementById("close-navbar")
butt.addEventListener("click",(e)=>{
    e.preventDefault()
    sidebar.style.display = "flex"
})
closeNav.addEventListener("click",(e)=>{
    e.preventDefault()
   
    sidebar.style.display = "none"
    sidebar.style.animation = "closenav 0.25s"
})