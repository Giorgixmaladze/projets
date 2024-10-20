const products = document.getElementById("products")
const dess = document.getElementsByClassName("dess")
let cartItems =[]
let cart = document.getElementById("cart")

let count = 0
Array.from(dess).forEach(des=>{
    let button = des.firstElementChild.nextElementSibling.firstElementChild
    
    button.addEventListener("click",() =>{
        let productCount = 1
        let product = des.lastElementChild.firstElementChild.nextElementSibling.textContent
        let productPrice = des.lastElementChild.lastElementChild.textContent
        cartItems.push(product)
        console.log(productPrice)
        console.log(cartItems)
        
        cart.firstElementChild.nextElementSibling.style.display = "none";
        des.firstElementChild.style.border = '1px solid hsl(14, 86%, 42%)'
        button.style.display = "none"   
          
        
        
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
        let cartPDiv = document.createElement("div")
        cartPDiv.className = "cartPdiv"
        let cartP = document.createElement("p")
        let fullProductValue = document.createElement("p")
        let remove = document.createElement("P")

        
        displayItem(product,cartP,productPrice,fullProductValue,cartPDiv,remove)
        p3.id = "increment";
        p3.textContent = "+"
        cartP.textContent = `x${productCount}`
        
        p1.addEventListener("click",()=>{
            if(p2.textContent === "1"){
                
                button.style.display = "flex"
                button.style.border = "none"
                cart.removeChild(cart.lastElementChild)
                buttonDiv.style.display = "none"
            }else{
                productCount --
                p2.textContent = productCount
                cartP.textContent = `x${productCount}`
                fullProductValue.textContent = `$${fullProductValue.textContent.slice(1,) - productPrice.slice(1,)}`

            }
        })
        p3.addEventListener("click",() =>{
            productCount ++
            p2.textContent = productCount
            cartP.textContent = `x${productCount}`
            fullProductValue.textContent = `$${productPrice.slice(1,) * productCount}`
            
        })
        
        
    })
    
    function displayItem(p,cartP,productPrice,fullProductValue,cartPDiv,remove){

    count ++
    cart.firstElementChild.firstElementChild.textContent = `Your Cart (${count})`
    let divs = document.createElement("div") 
    divs.className = "divs"
    divs.style.display ="flex"
    cart.appendChild(divs)
    let p1 = document.createElement("p")
    divs.appendChild(p1)
    p1.textContent=p   
    
    divs.appendChild(cartPDiv)
    let p2 = document.createElement("p")
    p2.textContent = `@${productPrice}`
    p2.style.color = "hsl(12, 20%, 44%)"
    
    p2.style.fontWeight = "400"
    remove.textContent = "x"
    remove.style.color = "grey"
    remove.style.fontSize = "1.5rem"
    cartPDiv.appendChild(cartP)
    cartPDiv.appendChild(p2)
    cartPDiv.appendChild(fullProductValue)
    cartPDiv.appendChild(remove)
    remove.addEventListener("click",()=>{
        cart.removeChild(divs)
    })
    
    
    
}


})

















