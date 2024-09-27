function pressOn(event){
    event.preventDefault();
    const press = event.code;
    if(press){
        const element = document.getElementById(press);
        element.style.backgroundColor = "White";
        element.style.color = "Black";
        element.style.border = "1px solid black"
    }
}

function pressOff(event){
    event.preventDefault();
    const press = event.code;
    if(press){
        const element = document.getElementById(press);
        element.style.backgroundColor = "Black";
        element.style.color = "#bbbaba";
        element.style.border = "1px solid black"
    }
}

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);