const products = document.getElementById("products")
const dess = document.getElementsByClassName("dess")
let cartItems =[]
 let cart = document.getElementById("cart")

let count = 0
Array.from(dess).forEach(des=>{
    let button = des.firstElementChild.nextElementSibling.firstElementChild
    
    button.addEventListener("click",() =>{
        let product = des.lastElementChild.firstElementChild.nextElementSibling.textContent
        cartItems.push(product)
        console.log(product)
        console.log(cartItems)
        displayItem(product)
        cart.firstElementChild.nextElementSibling.style.display = "none";
        des.firstElementChild.style.border = '1px solid hsl(14, 86%, 42%)'
        button.style.display = "none"   
          
        
        let productCount = 1
        let buttonDiv = document.createElement("div")
        buttonDiv.className = "buttDiv";
        button.parentElement.appendChild(buttonDiv)
        buttonDiv.style.backgroundColor = 'hsl(14, 86%, 42%)'

        let p1 = document.createElement("p");
        let p2 = document.createElement("p")
        let p3 = document.createElement("p");
        button.parentElement.style.display = "flex";
        buttonDiv.appendChild(p1);
        buttonDiv.appendChild(p2);
        buttonDiv.appendChild(p3)
        p1.id = "decrement"
        p1.textContent = "-"

        p2.id = "quantity";
        p2.textContent = productCount


        p3.id = "increment";
        p3.textContent = "+"

        
        p1.addEventListener("click",()=>{
            if(p2.textContent === "1"){
                buttonDiv.style.display = "none"
                button.style.display = "flex"
            }else{
                productCount --
                p2.textContent = productCount
            }
        })
        p3.addEventListener("click",() =>{
            productCount ++
            p2.textContent = productCount
        })
    })
    
    

})





function displayItem(p){
   
    count ++
    cart.firstElementChild.firstElementChild.textContent = `Your Cart (${count})`
    let divs = document.createElement("div") 
    divs.style.display ="flex"
    cart.appendChild(divs)
    let p1 = document.createElement("p")
    divs.appendChild(p1)
    p1.textContent=p    
    
}












