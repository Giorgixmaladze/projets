const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value = ""
}

function deleteDisplay(){
    const del =  display.value.slice(0, -1)
    display.value = del
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "error"
    }
}
