let display = document.getElementById("display");

function toprint(value){
    display.value +=value;
}

function resu(){
    try{
display.value = eval(display.value);
    }
    catch{
display.value = "enter correctly";
    }
}
function removea(){
    display.value="";
}
