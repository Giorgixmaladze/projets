const products = document.getElementById("products")
const dess = document.getElementsByClassName("dess")
let values =[]
let cart = document.getElementById("cart")
let total = document.createElement("div")
let carbon = document.createElement("div")
carbon.id = "delivery"
total.id = "total"
let count = 0
let order = document.createElement("p")
order.textContent = "Order total"
total.appendChild(order)
let h3 = document.createElement("h3")
total.appendChild(h3)
let tree = document.createElement("img")
tree.src = "./assets/images/icon-carbon-neutral.svg"
let carbonNeutral = document.createElement("p")
carbonNeutral.textContent = "This is a carbon-neutral delivery"
carbon.appendChild(tree)
carbon.appendChild(carbonNeutral)

Array.from(dess).forEach(des=>{
    let button = des.firstElementChild.nextElementSibling.firstElementChild
    
    
    button.addEventListener("click",() =>{
        let productCount = 1
        let product = des.lastElementChild.firstElementChild.nextElementSibling.textContent
        let productPrice = des.lastElementChild.lastElementChild.textContent
        total.style.display = "flex"
        carbon.style.display = "flex"
        console.log(productPrice)
        
        let background = cart.firstElementChild.nextElementSibling;
        background.style.display = "none";
        let border = des.firstElementChild
        border.style.border = '1px solid hsl(14, 86%, 42%)'
        button.style.display = "none"   
        let divs = document.createElement("div") 
        
        
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
        fullProductValue.textContent = productPrice

        

        
       
        p3.id = "increment";
        p3.textContent = "+"
        cartP.textContent = `x${productCount}`

        p1.addEventListener("click",()=>{
            if(p2.textContent === "1"){
                
                button.style.display = "flex"
                button.style.border = "none"
                buttonDiv.style.display = "none"
                des.firstElementChild.style.border = 'none'
                cart.removeChild(divs)
                
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
            total.lastElementChild.textContent = fullProductValue.textContent
           
    })
    
    
    displayItem(border,p1,p3,background,product,cartP,productPrice,p2,fullProductValue,cartPDiv,remove,buttonDiv)
    
    
    function displayItem(border,p3,p4,background,p,cartP,productPrice,productCount,fullProductValue,cartPDiv,remove,buttonDiv){
    
    count ++
    cart.firstElementChild.firstElementChild.textContent = `Your Cart (${count})`
    
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
        
        count = count - productCount.textContent;
        cart.firstElementChild.firstElementChild.textContent = `Your Cart (${count})`
        button.style.display = "flex"
        button.style.border = "none"
        buttonDiv.style.display = "none"
        border.style.border = "none"
        
        if(count ===0){
            background.style.display = "flex"
            total.style.display = "none"
        }

    })
    p3.addEventListener("click",()=>{
        count--
        cart.firstElementChild.firstElementChild.textContent = `Your Cart (${count})`
        
        
        
    })
    
    p4.addEventListener("click",() =>{
        count ++
        cart.firstElementChild.firstElementChild.textContent = `Your Cart (${count})`
    })
    cart.appendChild(total)
    cart.appendChild(carbon)

   
    
    

    
  
    
   
    
    
}


})

})