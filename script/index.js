let mode = '';
let first = 0;
let second = 0;
function answer(){
    second = document.getElementById("display").value;
    switch (this.mode) {
        case "+":
            const addResult = add(first, second);
            document.getElementById("display").value = addResult;
            return addResult;
        case "-":
            const minusResult = minus(first, second);
            document.getElementById("display").value = minusResult;
            return minusResult;
        case "*":
            const multiplyResult = multiply(first, second);
            document.getElementById("display").value = multiplyResult;
            return multiplyResult;
        case "/":
            const divideResult = divide(first, second);
            document.getElementById("display").value = divideResult;
            return divideRe;
    }
}

function clearScreen() {
    this.first = 0;
    this.second = 0;
    document.getElementById("display").value = '';
}

function backspace() {
    document.getElementById('display').value = document.getElementById('display').value.slice(0,-1);
}

function setMode(mode) {
    this.mode = mode;
    first = document.getElementById("display").value;
    document.getElementById("display").value = '';
}

function printToScreen(num) {
    document.getElementById("display").value += num;
}

function add(a,b) {
    return (Number(a) + Number(b));
}
function minus(a,b) {
    return (Number(a) - Number(b));
}
function multiply(a,b) {
    return (Number(a) * Number(b));
}
function divide(a,b) {
    return (Number(a) / Number(b));
}
