const numbers = document.querySelectorAll('.number');

let firstNumber = "";
let secondNumber = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (operator === "") {
            firstNumber += e.target.innerText;
            console.log(firstNumber);
        } else {
            secondNumber += e.target.innerText;
            console.log(secondNumber);
        }
    })
})