let display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{

let expression = display.value;

let result = eval(expression);

document.getElementById("history").innerHTML +=
expression + " = " + result + "<br>";

display.value = result;

}

catch{
display.value = "Error";
}

}

function toggleTheme(){
document.body.classList.toggle("dark");
}

setInterval(()=>{

document.getElementById("clock").innerHTML =
new Date().toLocaleTimeString();

},1000);