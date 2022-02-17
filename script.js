const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');


let firstNumber = "";
let secondNumber = "";
let operation = "";
let answer = "";

numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (operation === "") {
            firstNumber += e.target.innerText;
            document.getElementById('screen').innerHTML = firstNumber;
            console.log(firstNumber);
        } else {
            secondNumber += e.target.innerText;
            console.log(secondNumber);
            document.getElementById('screen').innerHTML = secondNumber;
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if (operation === "") {
            operation = e.target.innerText;
            console.log(operation);
        } else {
            operate();
            operation = e.target.innerText;
            console.log(operation);
        }
    })
})

equals.addEventListener('click', e => {
    operate();
})

clear.addEventListener('click', e => {
    answer = 0;
    firstNumber = "";
    secondNumber = "";
    document.getElementById('screen').innerHTML = firstNumber;
})

backspace.addEventListener('click', e => {
    if (secondNumber === "") {
        firstNumber = firstNumber.slice(0,-1);
        document.getElementById('screen').innerHTML = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0,-1);
        document.getElementById('screen').innerHTML = secondNumber;
    }
    
})

decimal.addEventListener('click', e => {
    if (operation === "") {
        firstNumber += e.target.innerText;
        document.getElementById('screen').innerHTML = firstNumber;
        console.log(firstNumber);
    } else {
        secondNumber += e.target.innerText;
        console.log(secondNumber);
        document.getElementById('screen').innerHTML = secondNumber;
    }
})


function operate() {
    if (operation === "+") {
        answer = (Number(firstNumber) + Number(secondNumber));
        console.log(answer);
    } else if (operation === "-") {
        answer = (Number(firstNumber) - Number(secondNumber));
        console.log(answer);
    } else if (operation === "/") {
        answer = (Number(firstNumber) / Number(secondNumber));
        console.log(answer);
    } else if (operation === "*") {
        answer = (Number(firstNumber) * Number(secondNumber));
        console.log(answer);
    } else {
        return
    }
    firstNumber = answer.toString();
    secondNumber = "";
    operation = "";
    document.getElementById('screen').innerHTML = firstNumber;
}