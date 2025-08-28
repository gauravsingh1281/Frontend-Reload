const sum = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const multi = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    return a / b;
}

function calculate() {

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result = 0;

    switch (operator) {
        case "+":
            result = sum(num1, num2)
            document.getElementById("result").textContent = result;
            document.getElementById("result-head").style.display = "block";
            break;
        case "-":
            result = sub(num1, num2)
            document.getElementById("result").textContent = result;
            document.getElementById("result-head").style.display = "block";
            break;
        case "*":
            result = multi(num1, num2)
            document.getElementById("result").textContent = result;
            document.getElementById("result-head").style.display = "block";
            break;
        case "/":
            result = div(num1, num2)
            document.getElementById("result").textContent = result;
            document.getElementById("result-head").style.display = "block";
            break;
        default:
            document.getElementById("result").textContent = Invalid;
            document.getElementById("result-head").style.display = "block";

    }
}


function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("result-head").style.display = "none";
}

