const display = document.getElementById("display");
const history = document.getElementById("history");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
    history.textContent = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = display.value.replace(/%/g,"/100");

        let result = eval(expression);

        history.textContent =
            display.value + " =";

        display.value = result;

    }

    catch{
        display.value = "Error";

        setTimeout(()=>{
            display.value="";
        },1000);
    }
}

document.addEventListener("keydown",(e)=>{

    const allowed =
    "0123456789+-*/.%";

    if(allowed.includes(e.key)){
        append(e.key);
    }

    else if(e.key==="Enter"){
        calculate();
    }

    else if(e.key==="Backspace"){
        deleteLast();
    }

    else if(e.key==="Escape"){
        clearDisplay();
    }
});