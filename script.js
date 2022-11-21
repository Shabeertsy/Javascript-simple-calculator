let result = 0;
let isclicked = true;
let res = 0;

// get values on click using this function
function buttonClick(data) {
    document.getElementById('input').value += data;
}


function equal() {

    text = document.getElementById('input').value

    result = eval(text)
    console.log(result);
    document.getElementById('input').value = result
}

// function for clear the input screen
function clearScreen() {
    document.getElementById('input').value = "";
}

