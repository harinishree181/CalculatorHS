function btnval(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function valclr() {
    document.getElementById("display").value = "";
}

function charclr() {
    var dispval = document.getElementById("display").value;
    if (dispval.length > 0) {
        display.value = dispval.slice(0, -1); // Remove the last character
    }
}

function calcval() {
    var calcval = document.getElementById("display").value;
    var result = eval(calcval);
    document.getElementById("display").value = result;
}