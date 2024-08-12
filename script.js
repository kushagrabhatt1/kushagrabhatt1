const display= document.querySelector("#display");
const display2= document.querySelector("#display2");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value="0"
    display2.value="0"

}
function calculate(){
try{
    display.value = eval(display.value);

    display2.value = eval(display.value);
}
catch(error){
    display2.value="Error"
}}